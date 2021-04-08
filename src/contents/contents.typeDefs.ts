import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    contentId: Int!
    photoUrl: String!
    photoName: String!
    createdAt: String!
    updatedAt: String!
  }

  type Question {
    id: Int!
    questionBody: String
    contentId: Int!
    answer: [Answer]
    createdAt: String!
    updatedAt: String!
  }
  type BookMark {
    id: Int!
    Content: Content!
    createdAt: String!
    updatedAt: String!
  }

  type Content {
    id: Int
    user: User
    question: [Question]
    photos: [Photo]
    title: String
    desc: String
    type: String
    userId: Int
    createdAt: String
    updatedAt: String
  }

  type Answer {
    id: Int!
    body: String
    questionId: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
