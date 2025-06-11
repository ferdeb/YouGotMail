require('dotenv').config();    
const nodemailer = require("nodemailer");

//Configuracion del entorno de nodemailer, configurar con los datos del negocio en .env

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), //De cambiarse, modificar la linea 6
    secure: true, //True si nunca vamos a usar STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
})
transporter
.verify()
.then(() => console.log("You got mail!"))
.catch((error) => console.error(error));

module.exports = transporter;


// Checar el metodo OAuth2 de las docs de nodemailer