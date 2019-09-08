const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    universities: [Universities]
  }  
  type Universities {
    name: String
    country: String
  }
`;

module.exports = typeDefs;
