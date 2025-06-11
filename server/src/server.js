const express = require("express"); //Libreria express importada
const cors = require("cors"); //Libreria cors importada
const server = express();

const nodemailer = require("./routes/nodemailer-routes");

server.use(cors());
server.use(express.json());
server.use("/nodemailer", nodemailer);

module.exports = server;


// Preguntar a GPT todo esto