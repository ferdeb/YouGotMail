const { Router } = requiere("express");

const transporter = require("../../config/nodemailer")

const nodemailer = Router();

nodemailer.post("/", async (req, res) => {
    const {gmail, name} = req.body;

    await transporter.sendMail({
        from: "Mensaje enviado por <proyectositvh25@gmail.com>",
        to: gmail,
        html: `<p>Fercho xd </p>`
    });
});