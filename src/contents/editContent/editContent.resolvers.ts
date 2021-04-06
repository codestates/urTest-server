import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    editProfile: protectedResolver(
      (_, { photos, title, desc }, { loggedInUser, client }) => {}
    ),
  },
};

export default resolvers;
