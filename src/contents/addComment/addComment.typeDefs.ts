import { gql } from "apollo-server-core";

export default gql`
  type addCommentResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    addComment(id: Int!, password: String!, desc: String!): addCommentResult
  }
`;
