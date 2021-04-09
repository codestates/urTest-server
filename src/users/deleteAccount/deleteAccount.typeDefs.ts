import { gql } from "apollo-server-core";

export default gql`
  type deleteAccountResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    deleteAccount(id: Int!): deleteAccountResult!
  }
`;
