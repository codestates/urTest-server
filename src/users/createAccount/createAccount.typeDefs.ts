import { gql } from "apollo-server-core";

export default gql`
  type CreateAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      firstName: String!
      lastName: String
      userName: String!
      email: String!
      password: String!
    ): CreateAccountResult
  }
`;
