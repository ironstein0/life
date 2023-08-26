include .env
export

prisma-generate:
	yarn workspace @life/model generate:all

prisma-migrate-dev:
	yarn workspace @life/model prisma:migrate:dev

prisma-migrate-prod:
	yarn workspace @life/model prisma:migrate:prod

prisma-migrate-reset:
	yarn workspace @life/model prisma:migrate:reset

prisma-studio:
	yarn workspace @life/model prisma:studio

pgsql-dev-create:
	docker run --name pgsql-dev -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_USER=${POSTGRES_USER} -p ${POSTGRES_PORT}:${POSTGRES_PORT} -d postgres

pgsql-dev-start:
	docker start pgsql-dev

pgsql-dev-stop:
	docker stop pgsql-dev
