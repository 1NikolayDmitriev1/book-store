import express from "express";
import { ApolloServer } from "apollo-server-express";
import { userSchema } from "./schemas/userSchema";
import { userResolver } from "./resolvers/userResolver";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs: [userSchema],
  resolvers: [userResolver],
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
});
