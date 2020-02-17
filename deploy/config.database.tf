resource "aws_db_instance" "guided" {
  name = var.db_database
  identifier = "guided-db-${var.stage}"
  allocated_storage = 20
  engine = "postgres"
  instance_class = "db.t2.micro"
  username = var.db_owner_user
  password = var.db_owner_password
  port = var.db_port
  apply_immediately = true
  publicly_accessible = true
}

resource "aws_route53_record" "database" {
  zone_id = aws_route53_zone.ridersbible.zone_id
  name = "${var.stage}-database.${var.domain_name}"
  type = "CNAME"
  ttl = "300"

  records = [
    aws_db_instance.guided.address]
}