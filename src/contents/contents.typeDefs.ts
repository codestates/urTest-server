import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    contentId: Int!
    photos: String!
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
    createdAt: String!
    updatedAt: String!
  }
`;
