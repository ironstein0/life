build-all:
	docker-compose build

server-dev: build-all
	docker-compose run --service-ports server yarn dev

prisma-studio: build-all
	docker-compose run --service-ports prisma-studio npx prisma studio

client-dev: build-all
	docker-compose run --service-ports client yarn dev