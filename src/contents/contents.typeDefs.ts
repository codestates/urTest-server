import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    contentId: Int!
    photos: String!
    photoName: String!
  }
  type Question {
    id: Int!
    questionBody: String
    contentId: Int!
  }

  type Content {
    id: Int!
    user: User!
    question: [Question]
    photos: [Photo]!
    title: String
    desc: String
    type: String
    userId: Int
    createdAt: String!
    updatedAt: String!
  }
`;
