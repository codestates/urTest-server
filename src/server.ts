require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as logger from "morgan";
import * as cors from "cors";

import client from "./client";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
// import fs from "fs";
// import https from "https";

const PORT = process.env.PORT;
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // console.log(req.headers.authorization);
    return {
      loggedInUser: await getUser(req.headers.authorization),
      client,
    };
  },
});

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(logger("tiny"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

// let server;
// server = http.createServer(app);
// apollo.installSubscriptionHandlers(server);

app.listen(PORT, () =>
  console.log(
    "🚀 Server ready at",
    `http://localhost:${PORT}${apollo.graphqlPath}`
  )
);
