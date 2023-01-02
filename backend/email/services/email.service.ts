import EmailDao from "../daos/email.dao";
import { CreateEmail } from "../dto/create.email.dto";
import { UpdateEmail } from "../dto/update.email.dto";
class EmailService {
  async createEmail(resource: CreateEmail) {
    return EmailDao.createEmail(resource);
  }

  async updateEmail(resource: UpdateEmail) {
    return EmailDao.updateEmail(resource);
  }
}

export default new EmailService();
