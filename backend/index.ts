import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import { gql } from 'graphql-tag';

const prisma = new PrismaClient();
const app = express();

const typeDefs = gql`
  type User {
    id: Int
    email: String
    name: String
  }

  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    users: [User]
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    books: () => prisma.book.findMany(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(4000, () =>
    console.log('Server running on http://localhost:4000/graphql')
  );
});
