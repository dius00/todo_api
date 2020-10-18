require('dotenv').config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/graphql/schema/schema");
const resolvers = require("./src/graphql/resolver/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});
