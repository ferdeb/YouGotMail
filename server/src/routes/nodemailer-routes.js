const { Router } = require("express");

const transporter = require("../../config/nodemailer")

const nodemailer = Router();

nodemailer.post("/", async (req, res) => {  // Investigar linea 7 y 8
    const {gmail, name} = req.body;

    await transporter.sendMail({
        from: "Mensaje enviado por <proyectositvh25@gmail.com>",
        to: gmail,
        subject: "Mensaje desde PC",
        html: `<p> Fercho si lees esto es porque el Backend funciono xd </p>`,
    });
});

module.exports = nodemailer;