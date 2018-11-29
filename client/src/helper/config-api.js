import ApolloClient from 'apollo-boost';
const configApi = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export { configApi };
