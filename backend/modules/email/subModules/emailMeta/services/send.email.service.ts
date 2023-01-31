import * as nodemailer from "nodemailer";
import dotenv from 'dotenv';
import recipientService from "../../recipient/services/recipient.service";
import { GetRecipients } from "../../recipient/dto/get.recipients.dto";
import { Recipient } from "@prisma/client";
import mailOptionsService from "./mail.options.service";

class SendEmail {

  transporter: nodemailer.Transporter = {} as nodemailer.Transporter;

  constructor() {
    // dotenv.config();
    this.createTransporter();
  }
  
  createTransporter() { 
    console.log("process.env.NCWB_EMAIL:", process.env.NCWB_EMAIL);
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NCWB_EMAIL,
        pass: process.env.NCWB_EMAIL_PASSWORD,
      },
    });
  }

  getTransporter() {
    return this.transporter;
  }

  
  async sendEmail(payload: GetRecipients) {
    try { 
      await this.transporter.sendMail(await mailOptionsService._getMailOptions(payload.emailMetaId));
    } catch(err) {
      console.error("Error in sending email", err)
    }
  }
}

export default new SendEmail();