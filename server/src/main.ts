import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import express from 'express';
import http from 'http';
import { PrismaClient } from '.prisma/client';

async function startApolloServer() {
    // express server
    const app = express();
    const httpServer = http.createServer(app);

    // prisma client
    const prisma = new PrismaClient();

    // apollo server
    const server = new ApolloServer({ 
        context: () => ({ prisma }),
        schema,
    });

    await server.start();

    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 8081 }, resolve));
    console.log(`🚀 Server ready at http://localhost:8081${server.graphqlPath}`);
}

startApolloServer()
