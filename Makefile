build_backend:
	docker-compose -f docker-compose.builder.yml run --rm be_build

install_website:
	docker-compose -f docker-compose.builder.yml run --rm fe_install

install_backend:
	docker-compose -f docker-compose.builder.yml run --rm be_install

seed_basic:
	docker-compose -f docker-compose.builder.yml run --rm seed_basic

install:
	make install_backend
	make build_backend

backend: .env
	docker stop db || true
	docker rm db || true
	docker volume rm guided_db_data || true
	docker-compose up

frontend_native:
	cd frontend/site && yarn native:start

frontend_web:
	cd frontend/site && yarn web:dev

frontend_android:
	cd frontend/site && yarn native:android

frontend_ios:
	cd frontend/site && yarn native:ios

seed_basic:
	cd python
	python3 guided seed