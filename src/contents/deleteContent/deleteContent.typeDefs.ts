import { gql } from "apollo-server-core";

export default gql`
  type deleteContentResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteContent(id: Int!): deleteContentResult
  }
`;
