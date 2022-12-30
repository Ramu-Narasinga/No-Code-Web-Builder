import EmailDao from "../daos/email.dao";
import { CreateEmailDto, UpdateEmailDto } from "../dto/create.email.dto";


class EmailService {
  async createEmail(resource: CreateEmailDto) {
    return EmailDao.createEmail(resource);
  }

  async updateEmail(resource: UpdateEmailDto) {
    return EmailDao.updateEmail(resource);
  }
}

export default new EmailService();
