locals {
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCkLQdpXlH2SXRqENxRCOExj7lwWrb3tZkLyjwd5yjSHfwm1a3OFY5msbhyCl8cZt2BdcXii4i279JRu3KvdAg/2lMwzRgZfjcQJmfz2PoPP4OplEWFZ7+lKOjlmduKGrsu1Kn3Il3RaBh04RkqcATuWUu7dCGJPafgqBv8Av8d1Crf89vUNvj1vZangAdoeoOm5c3lmUpxkLjxEcIjdII7IQoA0fZUdMkjaZzcXC+Y7utSMQbv9R78cT0QWs8Xcp/dV5iych55b2RxzD5GAcxXKkowDjM26alTB8h0nW0xGVJtYZrDCGJZd6ItGcAgo7Lvz6IMmV63NJK4E6u97wPJ"
}

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

resource "aws_key_pair" "server" {
  key_name = "guided-server"
  public_key = local.public_key
}

resource "aws_instance" "server" {
  ami = data.aws_ami.latest-ubuntu.id
  instance_type = "t2.micro"
  //  security_groups = [
  //    aws_security_group.server.arn]
  //
  //  vpc_security_group_ids = [
  //    aws_security_group.server.id]

  key_name = aws_key_pair.server.key_name

  associate_public_ip_address = true

  monitoring = true

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "guided-server-${var.stage}"
  }

  depends_on = [
    aws_route53_record.database]
}

//resource "null_resource" "install_node" {
//  triggers = {
//    public_ip = aws_instance.server.public_ip
//  }
//
//  connection {
//    type = "ssh"
//    host = aws_instance.server.public_ip
//    user = "ubuntu"
//    port = 22
//    agent = true
//    private_key = var.private_key
//  }
//
//  provisioner "remote-exec" {
//    inline = [
//      "pwd",
//      "curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -",
//      "sudo apt-get update",
//      "sudo apt-get  --yes install nodejs",
//      "echo which node",
//      "which node",
//      "echo node version",
//      "node --version",
//      "sudo apt-get --yes install npm",
//      "echo npm version",
//      "npm --version",
//      "sudo npm install pm2@latest -g",
//      "echo pm2 version",
//      "pm2 --version",
//      "pm2 start server.js --name guided"
//    ]
//  }
//
//  depends_on = [
//    aws_instance.server,
//    null_resource.upload_cache,
//    null_resource.upload_server]
//}

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
    aws_instance.server]

}

resource "aws_security_group" "server" {
  name = "guided-server-${var.stage}"

  //  vpc_id = aws_default_vpc.default.id
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

  //  ingress {
  //    from_port = 22
  //    to_port = 22
  //    protocol = "tcp"
  //    cidr_blocks = [
  //      "0.0.0.0/0"]
  //  }
}

resource "aws_security_group" "graphql" {
  name = "guided-graphql-${var.stage}"

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

  //  ingress {
  //    from_port = 22
  //    to_port = 22
  //    protocol = "tcp"
  //    cidr_blocks = [
  //      "0.0.0.0/0"]
  //  }
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
  name = "${var.stage}-server.${var.domain_name}"
  type = "A"
  zone_id = aws_route53_zone.ridersbible.zone_id

  ttl = 30
  records = [
    aws_instance.server.public_ip]
}