import { gql } from "apollo-server-core";

export default gql`
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      userName: String
      email: String
      password: String
    ): EditProfileResult!
  }
`;
