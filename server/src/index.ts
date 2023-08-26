// The reflect-metadata shim is required to make the type reflection work.
import "reflect-metadata";

import { resolvers } from "@life/schema/prisma/typegraphql";
import { PrismaClient } from "@life/schema/prisma/client";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

async function bootstrap() {
  // Build GraphQL schema.
  const schema = await buildSchema({
      resolvers,
      validate: false
  });

  // Create GraphQL server
  const server = new ApolloServer({ schema });

  // Start server
  const { url } = await startStandaloneServer(server, {
    context: async () => ({ prisma }),
    listen: { port: 4000 }
  });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap();

