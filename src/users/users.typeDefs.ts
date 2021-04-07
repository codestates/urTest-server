import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int
    userName: String
    email: String
    grade: String
    contents: [Content]
    contentType: [Content]
    createdAt: String
    updatedAt: String
  }
`;
