const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

// const db = require("./models/index");
// const { User, Role } = require("./models/index");

// const UserService = require("./services/user-service");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Sever Started on ${PORT}`);
  });
};

prepareAndStartServer();
