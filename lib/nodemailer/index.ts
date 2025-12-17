import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";
import { text } from "stream/consumers";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    },
})

export const sendWelcomeEmail = async ({email, name, intro}: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace("{{name}}", name)
        .replace("{{intro}}", intro);

    const mailOptions = {
        from: `"Signalist" <dev.thanhcao@gmail.com>`,
        to: email,
        subject: 'Welcome to Signalist - Your stock market is ready!',
        text: `Hi ${name}, Thanks for joining Signalist!`,
        html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
}