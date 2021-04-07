import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getContent(id: Int!): Content
    getContentAll(userId: Int, type: String): [Content]
  }
`;
