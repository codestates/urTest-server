import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    contentId: Int!
    photos: String!
    photoName: String!
  }
  type Content {
    id: Int!
    user: User!
    photos: [Photo]!
    title: String
    desc: String
    createdAt: String!
    updatedAt: String!
  }
`;
