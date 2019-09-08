// require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UniversitiesAPI = require('./datasources/universities');
const LaunchAPI = require('./datasources/launch');

const internalEngineDemo = require('./engine-demo');

// set up any dataSources our resolvers need
const dataSources = () => ({
  UniversitiesAPI: new UniversitiesAPI(),
  LaunchAPI: new LaunchAPI(),
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  engine: {
    ...internalEngineDemo,
  },
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test')
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  UniversitiesAPI,
  server,
};
