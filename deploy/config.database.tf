resource "aws_db_parameter_group" "db_logical_replication" {
  family = "postgres11"

  parameter {
    apply_method = "pending-reboot"
    name = "rds.logical_replication"
    value = "1"
  }
}

resource "random_password" "database_owner" {
  length = 16
  special = false
}

resource "random_password" "database_postgraphile" {
  length = 16
  special = false
}

resource "random_password" "jwt_secret" {
  length = 16
  special = false
}

resource "aws_db_instance" "guided" {
  name = var.db_database
  identifier = "guided-${var.stage}"
  allocated_storage = 300
  engine = "postgres"
  parameter_group_name = aws_db_parameter_group.db_logical_replication.name
  instance_class = "db.t2.micro"
  username = var.db_owner_user
  password = random_password.database_owner.result
  port = var.db_port
  final_snapshot_identifier = "guided-db-${var.stage}"
  apply_immediately = true
  publicly_accessible = true
  vpc_security_group_ids = [
    aws_security_group.open.id]
  depends_on = [
    aws_db_parameter_group.db_logical_replication]
}

resource "aws_route53_record" "database" {
  name = "${local.domain_prefix}database.${var.domain_name}"
  zone_id = aws_route53_zone.ridersbible.zone_id
  type = "CNAME"
  ttl = "300"
  records = [
    aws_db_instance.guided.address]
}