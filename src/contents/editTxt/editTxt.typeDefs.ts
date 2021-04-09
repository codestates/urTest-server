import { gql } from "apollo-server-core";

export default gql`
  type EditPhotoResult {
    ok: Boolean!
    error: String
  }

  input data {
    id: Int!
    question: String
    answer1: String
    answer2: String
  }

  type Mutation {
    editTxt(modify: [data]): EditPhotoResult!
  }
`;
