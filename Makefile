include .env
export

prisma-generate:
	yarn workspace @life/schema generate:all

prisma-migrate-dev:
	yarn workspace @life/schema prisma:migrate:dev

prisma-migrate-dev-reset:
	yarn workspace @life/schema prisma:migrate:reset

prisma-migrate-prod:
	yarn workspace @life/schema prisma:migrate:prod

prisma-studio:
	yarn workspace @life/schema prisma:studio

pgsql-dev-create:
	docker run --name pgsql-dev -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -e POSTGRES_USER=${POSTGRES_USER} -p ${POSTGRES_PORT}:${POSTGRES_PORT} -d postgres

pgsql-dev-start:
	docker start pgsql-dev

pgsql-dev-stop:
	docker stop pgsql-dev

server-dev: prisma-generate
	yarn workspace @life/server start:dev