import RecipientDao from "../daos/recipient.dao";
import { CreateRecipient } from "../dto/create.recipient.dto";
import { GetRecipients } from "../dto/get.recipients.dto";
import { UpdateRecipient } from "../dto/update.recipient.dto";

class RecipientService {
  
  async createRecipients(resource: CreateRecipient) {
    return await RecipientDao.createRecipients(resource);
  }

  async updateRecipients(resource: UpdateRecipient) {
    return await RecipientDao.updateRecipients(resource);
  }

  async getRecipients(resource: GetRecipients) {
    return await RecipientDao.getRecipients(resource);
  }
}

export default new RecipientService();
