import { gql } from "apollo-server-core";

export default gql`
  type deleteBookMarkResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteBookMark(id: Int!): deleteBookMarkResult
  }
`;
