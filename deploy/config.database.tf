resource "aws_db_parameter_group" "db_logical_replication" {
  family = "postgres11"

  parameter {
    apply_method = "pending-reboot"
    name = "rds.logical_replication"
    value = "1"
  }
}

resource "aws_db_instance" "guided" {
  name = var.db_database
  identifier = "guided-${var.stage}"
  allocated_storage = 300
  engine = "postgres"
  parameter_group_name = aws_db_parameter_group.db_logical_replication.name
  instance_class = "db.t2.micro"
  username = var.db_owner_user
  password = var.db_owner_password
  port = var.db_port
  final_snapshot_identifier = "guided-db-${var.stage}"
  apply_immediately = true
  publicly_accessible = true
  depends_on = [
    aws_db_parameter_group.db_logical_replication]
}

resource "aws_route53_record" "database" {
  zone_id = aws_route53_zone.ridersbible.zone_id
  name = "${var.stage}-database.${var.domain_name}"
  type = "CNAME"
  ttl = "300"
  records = [
    aws_db_instance.guided.address]
}