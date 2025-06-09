const express = require("express"); //Libreria express importada

const cors = require("cors"); //Libreria cors importada

const server = express();

server.use(cors());

server.use(server.json());

server.use("/nodemailer", nodemailer);

module.exports = server;