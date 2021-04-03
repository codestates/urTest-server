import { gql } from "apollo-server-core";

export default gql`
  type Query {
    seeContent(id: Int!): Content
  }
`;
