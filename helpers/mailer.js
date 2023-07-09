import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { google } from "googleapis";
import Handlebars from "handlebars";

const OAuth2 = google.auth.OAuth2;

const accountTransport = {
    "service": "gmail",
    "auth": {
        "type": "OAuth2",
        "user": "johanssonr638@gmail.com",
        "clientId": "335878874460-a3f8gvjk9cismlnq44a2gikut2eh3ctv.apps.googleusercontent.com",
        "clientSecret": "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",
        "refreshToken": "1//04NTFm0zIQH6-CgYIARAAGAQSNwF-L9IrnWFD3B9UhvJVecsAFseTO16psB4fsILAkTNw27jDkROEBOYNhi35Bezf1hTgkJ8KonU",
    }
}

const getTemplate = (template, replacements) => {

    if (!template) {
        return '';
    }

    const filePath = path.join(__dirname, '..', 'emails', `${template}.hbs`);
    console.log(filePath);
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const templateH = Handlebars.compile(source);
    const htmlToSend = templateH(replacements);

    return htmlToSend;
}

const mail_rover = async (callback) => {
    const oauth2Client = new OAuth2(
        accountTransport.auth.clientId,
        accountTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );
    oauth2Client.setCredentials({
        refresh_token: accountTransport.auth.refreshToken
    });
    // const token = await oauth2Client.getAccessToken();
    // console.log(token);
    accountTransport.auth.accessToken = "ya29.a0AbVbY6NiRQNEE6QigEhz5a8oVmeQHps1gfQGKXOaOXuhvZ5Nz3VD2vws3i6RRhpKrmvUVdx1KZpbx8ZzLfSkwFhiDEZnjuueKFBv8l3zmX0ZCk1ld6-b6e7oRASH-lQThBBzsGSIS5V1vs9IvWItDIqBVTpgQkkaCgYKAX0SARMSFQFWKvPlK30Zn2ow4feGHqrqooya4Q0166";
    await callback(nodemailer.createTransport(accountTransport))
};

const sendEmail = async (from, to, subject, template, replacements) => {

    await mail_rover(async (transporter) => {

        const htmlToSend = getTemplate(template, replacements)

        const info = await transporter.sendMail({
            from, // Desde donde '"Sender Name" <from@example.net>'
            to, // Hacia quien "email.address@gmail.com"
            subject,
            text: "",
            html: htmlToSend,
        });

        console.log("Message sent: %s", info);
    })

}

export default sendEmail;