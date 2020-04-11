data "aws_ami" "latest-ubuntu" {
  most_recent = true
  owners = [
    "099720109477"]

  filter {
    name = "name"
    values = [
      "ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-*"]
  }

  filter {
    name = "virtualization-type"
    values = [
      "hvm"]
  }
}

resource "aws_instance" "server" {
  ami = data.aws_ami.latest-ubuntu.id
  instance_type = "t2.micro"
  security_groups = [
    aws_security_group.open.name]

  iam_instance_profile = aws_iam_instance_profile.server.name

  key_name = "guided-server-${var.stage}"

  associate_public_ip_address = true

  monitoring = true

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "guided-server-${var.stage}"
  }
}

data "aws_iam_policy_document" "server" {
  statement {
    actions = [
      "sts:AssumeRole"]

    principals {
      type = "Service"
      identifiers = [
        "ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "server" {
  name = "guided-server-${var.stage}"

  assume_role_policy = data.aws_iam_policy_document.server.json
}

resource "aws_iam_instance_profile" "server" {
  name = "guided-server-${var.stage}"
  role = aws_iam_role.server.name
}

resource "null_resource" "install_node" {
  triggers = {
    public_ip = aws_instance.server.public_ip
  }

  connection {
    type = "ssh"
    host = aws_instance.server.public_ip
    user = "ubuntu"
    port = 22
    agent = true
    private_key = file(var.private_key_path)
  }

  provisioner "remote-exec" {
    inline = [
      "pwd",
      "curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -",
      "sudo apt-get update",
      "sudo apt-get  --yes install nodejs",
      "echo which node",
      "which node",
      "echo node version",
      "node --version",
      "sudo apt-get --yes install npm",
      "echo npm version",
      "npm --version",
      "sudo npm install pm2@latest -g",
      "echo pm2 version",
      "pm2 --version",
      "pm2 start server.js --name guided"
    ]
  }

  depends_on = [
    null_resource.upload_cache,
    null_resource.upload_envs,
    null_resource.upload_server]
}

resource "null_resource" "upload_server" {
  triggers = {
    public_ip = aws_instance.server.public_ip
    sha1 = sha1(file("dist/server.js"))
  }

  connection {
    type = "ssh"
    host = aws_instance.server.public_ip
    user = "ubuntu"
    port = 22
    agent = true
    private_key = file(var.private_key_path)
  }

  provisioner "file" {
    source = "dist/server.js"
    destination = "server.js"
  }

  depends_on = [
    aws_instance.server]
}

resource "null_resource" "upload_envs" {

  triggers = {
    public_ip = aws_instance.server.public_ip
    env_file = local.env_file
    force = timestamp()
  }

  connection {
    type = "ssh"
    host = aws_instance.server.public_ip
    user = "ubuntu"
    port = 22
    agent = true
    private_key = file(var.private_key_path)
  }

  provisioner "file" {
    destination = ".env"
    content = local.env_file
  }

  depends_on = [
    aws_instance.server]
}

resource "null_resource" "upload_cache" {
  triggers = {
    public_ip = aws_instance.server.public_ip
    sha1 = sha1(file("dist/cache"))
  }

  connection {
    type = "ssh"
    host = aws_instance.server.public_ip
    user = "ubuntu"
    port = 22
    agent = true
    private_key = file(var.private_key_path)
  }

  provisioner "file" {
    source = "dist/cache"
    destination = "cache"
  }

  depends_on = [
    aws_instance.server]
}

resource "null_resource" "start_server" {
  triggers = {
    force = timestamp()
  }

  connection {
    type = "ssh"
    host = aws_instance.server.public_ip
    user = "ubuntu"
    port = 22
    agent = true
    private_key = file(var.private_key_path)
  }

  provisioner "remote-exec" {
    inline = [
      "pm2 reload server.js --name guided"
    ]
  }

  depends_on = [
    null_resource.upload_server,
    null_resource.upload_cache,
    null_resource.upload_envs,
    null_resource.install_node]

}

resource "aws_security_group" "open" {
  name = "guided-open-${var.stage}"

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [
      "0.0.0.0/0"]
  }

  ingress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [
      "0.0.0.0/0"]
  }
}

resource "aws_s3_bucket" "access_logs" {
  bucket = "guided-access-logs-${var.stage}"
}

resource "aws_s3_bucket_policy" "access_logs" {
  bucket = aws_s3_bucket.access_logs.bucket
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::652711504416:root"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.access_logs.bucket}/*"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "delivery.logs.amazonaws.com"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.access_logs.bucket}/*",
      "Condition": {
        "StringEquals": {
          "s3:x-amz-acl": "bucket-owner-full-control"
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "delivery.logs.amazonaws.com"
      },
      "Action": "s3:GetBucketAcl",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.access_logs.bucket}"
    }
  ]
}
POLICY
}

resource "aws_route53_record" "server" {
  name = "${local.domain_prefix}server.${var.domain_name}"
  type = "A"
  zone_id = aws_route53_zone.ridersbible.zone_id

  ttl = 30
  records = [
    aws_instance.server.public_ip]
}