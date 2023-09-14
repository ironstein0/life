// The reflect-metadata shim is required to make the type reflection work.
import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { DocumentModelExtension } from '@life/documents';
import { PhilosophyValidation } from "@life/schema/extensions/philosophy_validation";
import { PrismaClient } from "@life/schema/prisma/client";
import { resolvers } from "@life/schema/prisma/typegraphql";
import { buildSchema } from "type-graphql";

const prisma = new PrismaClient()
                  .$extends(PhilosophyValidation)
                  .$extends(DocumentModelExtension);

async function bootstrap() {
  // Build GraphQL schema.
  const schema = await buildSchema({
      resolvers: [...resolvers],
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

