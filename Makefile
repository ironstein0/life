build-all:
	docker-compose build

server-dev: build-all
	docker-compose run --service-ports server bash

prisma-studio: build-all
	docker-compose run --service-ports prisma-studio npx prisma studio