import { gql } from "apollo-server-core";

export default gql`
  type addViewsResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    addViews(id: Int!): addViewsResult
  }
`;
