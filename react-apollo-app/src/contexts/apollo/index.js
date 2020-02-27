import React from "react";
import ApolloClient from "apollo-boost";
import config from "../../configs/config";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: config.apiUrl
});

const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
