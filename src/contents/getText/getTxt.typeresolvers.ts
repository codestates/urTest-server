import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers = {
  Query: {
    getTxt: async (_, { id }) => {},
  },
};

export default resolvers;
