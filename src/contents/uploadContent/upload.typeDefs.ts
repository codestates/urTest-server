import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    uploadContent(title: String!, desc: String!): Content
    uploadPhoto(file: Upload!, id: Int!): Photo
  }
`;
