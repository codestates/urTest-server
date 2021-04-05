import { gql } from "apollo-server-core";

export default gql`
  type loginResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    authLogin(token: String!): loginResult!
  }
`;
