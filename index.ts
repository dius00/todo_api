import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { GQLResolver } from './src/graphql/resolver/resolver';
import dbConfig from "./ormconfig";


async function runServer() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [GQLResolver]
  });

  const server = new ApolloServer({ schema });
  await server.listen(5050);

  console.log('Server started at localhost:5050');
}


runServer();


// require('dotenv').config();
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require("./src/graphql/schema/schema");
// const resolvers = require("./src/graphql/resolver/resolver");

// const server = new ApolloServer({ typeDefs, resolvers });

// const PORT = process.env.PORT || 4000;

// server.listen(PORT, () => {
//   console.log(
//     `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
//   );
// });
