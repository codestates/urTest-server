import { gql } from "apollo-server-core";

export default gql`
  type LoginResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    login(token: String!): LoginResult!
  }
`;
