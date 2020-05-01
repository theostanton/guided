install_website:
	docker-compose -f docker-compose.builder.yml run --rm install_website

install_backend:
	docker-compose -f docker-compose.builder.yml run --rm install_backend

fresh_database:
	docker stop db || true
	docker rm db || true
	docker volume rm guided_db_data || true
	docker-compose up

install:
	docker-compose -f docker-compose.builder.yml up

develop:
	docker-compose up