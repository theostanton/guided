resource "aws_ecr_repository" "guided" {
  name = "guided"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecs_task_definition" "graphql" {
  family = "graphql"
  container_definitions = "${file("task-definitions/graphql.json")}"
}