# life

I'll be entering my 30s soon. In this seemingly endless and growing list of priorities and tasks, I would like to find balance so I can be happy and stress free.

This project is system for composing, orchestrating and executing my ideal life. Meant only for myself, not for anyone else (to be kept in mind while designing features, so as not to unnecessarily generalize the problems at hand).

# Timeline

| Date       | Goal |
| ---------- | ---- |
| 01/01/2024 | start using this system seriously |


# stack

## general
1. `yarn workspaces` to manage the entire project
2. [nvm](https://github.com/nvm-sh/nvm) for managing node versions

## backend

1. [Prisma](https://www.prisma.io/) as an ORM
2. [Zenstack](https://zenstack.dev/) for [prisma model inheritance](https://github.com/prisma/prisma/issues/12604#issuecomment-1529844596)
3. [Typegraphql](https://typegraphql.com/) - code first nodejs graphql server side framework
4. [TypeGraphQL prisma](https://prisma.typegraphql.com/) - prisma schema to typegraphql resolvers codegen
5. Apollo server to host the graphql schema

### Build steps

1. `npx zenstack generate` - given `schema.zmodel` genrates `prisma.schema`
2. `npx prisma db push` - run DB migration given the new `prisma.schema`
3. `npx prisma generate` - generates typegraphql resolvers

## frontend
1. React
2. [urql](https://formidable.com/open-source/urql/) - graphql client
3. [urql-devtools](https://github.com/urql-graphql/urql-devtools)
