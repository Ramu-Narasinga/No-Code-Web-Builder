import { Email, EmailMeta, Recipient } from "@prisma/client";
import recipientService from "../../recipient/services/recipient.service";
import emailMetaService from "./email.meta.service";

class SendEmailToOptions {

  mailOptions = {
    from: "",
    to: "",
    subject: "",
    html: "",
    css: ""
  };

  _getToOptInMailOptions(recipients: Recipient[] | undefined) {
    let to = "";
    if (recipients && recipients.length > 0) {
      to = recipients.map(recipient => recipient.recipientEmail).join(',');
    }
    return to;
  }

  _updateToOptInMailOptions(recipients: Recipient[] | undefined) {
    this.mailOptions.to = this._getToOptInMailOptions(recipients);
  }

  async _updateRecipients(emailMetaId: number) {
    let fetchedRecipientsRes: Recipient[] | undefined = await recipientService.getRecipients({ emailMetaId });
    this._updateToOptInMailOptions(fetchedRecipientsRes);
  }

  _getSubject(emailMeta: EmailMeta & { email: Email} | null) {
    let subject = "";
    if (emailMeta && emailMeta.email) {
      subject = emailMeta.subject;
    }
    return subject;
  }

  _getHtml(emailMeta: EmailMeta & { email: Email} | null) {
    let html = "";
    if (emailMeta && emailMeta.email) {
      html = emailMeta.email.html;
    }
    return html;
  }

  _getCss(emailMeta: EmailMeta & { email: Email} | null) {
    let css = "";
    if (emailMeta && emailMeta.email) {
      css = emailMeta.email.css;
    }
    return css;
  }

  _updateEmailConfiguration(emailMeta: EmailMeta & { email: Email} | null) {
    this.mailOptions.subject = this._getSubject(emailMeta);
    this.mailOptions.html = this._getHtml(emailMeta);
    this.mailOptions.css = this._getCss(emailMeta);
  }

  async _updateSubjectAndHtml(emailMetaId: number) {
    let fetchedEmail = await emailMetaService.getEmailByMetaId({ emailMetaId });
    this._updateEmailConfiguration(fetchedEmail);
  }

  async _getMailOptions(emailMetaId: number) {
    await this._updateRecipients(emailMetaId);
    await this._updateSubjectAndHtml(emailMetaId)
    return this.mailOptions;
  }

}

export default new SendEmailToOptions();