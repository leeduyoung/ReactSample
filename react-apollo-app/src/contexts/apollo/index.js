import ApolloClient, { gql } from 'apollo-boost';
import config from '../../configs/config'

const client = new ApolloClient({
//   uri: config.apiUrl,
  uri: "https://48p1r2roz4.sse.codesandbox.io/",
});
