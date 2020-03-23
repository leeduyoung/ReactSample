import { gql } from "graphql.macro";

export const MUTATION_FETCH_TOKEN = gql`
  mutation {
    fetchAuthToken @client
  }
`;

export const MUTATION_STORE_TOKEN = gql`
  mutation(
    $accessToken: String!
    $refreshToken: String!
    $refreshTokenExpireTime: Int!
  ) {
    updateAuthToken(
      accessToken: $accessToken
      refreshToken: $refreshToken
      refreshTokenExpireTime: $refreshTokenExpireTime
    ) @client
  }
`;

export const storeTokenVariables = token => {
  return {
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
    refreshTokenExpireTime: token.refreshTokenExpireTime,
  };
};
