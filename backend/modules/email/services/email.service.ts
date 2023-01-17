import EmailDao from "../daos/email.dao";
import { CreateEmail } from "../dto/create.email.dto";
import { GetEmailsDto } from "../dto/get.emails.dto";
import { UpdateEmail } from "../dto/update.email.dto";
class EmailService {

  async getEmails(getEmailsPayload: GetEmailsDto) {
    try {
      return EmailDao.getEmails(getEmailsPayload);
    } catch(err) {
      console.log("Error in get website service", err);
      throw new Error("Error in fetching websites");
    }
  }

  async createEmail(resource: CreateEmail) {
    try {
      return await EmailDao.createEmail(resource);
    } catch(err) {
      console.log("Error in create website service", err);
      throw new Error('Errro encountered in creating website');
    }
  }

  async updateEmail(resource: UpdateEmail) {
    return EmailDao.updateEmail(resource);
  }
}

export default new EmailService();
