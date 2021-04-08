import { gql } from "apollo-server-core";

export default gql`
  type createAccountResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    createAccount(
      userName: String
      email: String!
      password: String!
    ): createAccountResult!
  }
`;
