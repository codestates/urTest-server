import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getPhoto(contentId: Int!): Content
  }
`;
