import { gql } from "apollo-server-core";

export default gql`
  type Query {
    searchContent(keyword: String!): [Content]!
  }
`;
