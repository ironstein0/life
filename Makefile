include .env
export

schema-generate:
	yarn workspace @life/schema generate:all

schema-migrate: schema-migrate-dev schema-migrate-prod

schema-migrate-dev:  schema-generate
	yarn workspace @life/schema prisma:migrate:dev

schema-migrate-dev-reset: schema-generate
	yarn workspace @life/schema prisma:migrate:reset

schema-migrate-prod: schema-generate
	yarn workspace @life/schema prisma:migrate:prod

prisma-studio:
	yarn workspace @life/schema prisma:studio

pgsql-dev-create:
	docker run --name pgsql-dev -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_USER=${POSTGRES_USER} -p ${POSTGRES_PORT}:${POSTGRES_PORT} -d postgres

pgsql-dev-start:
	docker start pgsql-dev

pgsql-dev-stop:
	docker stop pgsql-dev

server-dev:
	yarn workspace @life/server start:dev

client-dev:
	yarn workspace @life/client start