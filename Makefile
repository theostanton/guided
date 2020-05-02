install_website:
	docker-compose -f docker-compose.builder.yml run --rm fe_install

install_backend:
	docker-compose -f docker-compose.builder.yml run --rm be_install

build_backend:
	docker-compose -f docker-compose.builder.yml run --rm be_build

install:
	make install_backend
	make build_backend
	make install_website

fresh_database: .env
	docker stop db || true
	docker rm db || true
	docker volume rm guided_db_data || true
	docker-compose up

develop: .env
	docker-compose up