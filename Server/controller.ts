import "dotenv/config";
import { RequestHandler } from "express";
import sgMail from "@sendgrid/mail";
export const message: RequestHandler<
  unknown, //req params
  unknown, //res body
  { name: string; email: string; subject: string; message: string }, //req body
  unknown
> = async (req, res, next) => {
  try {
    const sendAPIkey = process.env.GRID_API_STRING;
    if (!sendAPIkey) {
      return res
        .status(500)
        .json({ error: "SendGrid API key is not configured" });
    }

    const { name, email, subject, message } = req.body;
    sgMail.setApiKey(sendAPIkey);
    const msg = {
      to: "sahrfearmacarthy@gmail.com",
      from: "smacarthy@miu.edu",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: "Sent" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Fail" });
      });
  } catch (error) {
    console.log("Error sending email", error);
    res.status(500).json({ error: "Fail" });
  }
};
