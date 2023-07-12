import RecipientDao from "../daos/recipient.dao";
import { CreateRecipient } from "../dto/create.recipient.dto";
import { GetRecipients } from "../dto/get.recipients.dto";
import { DeleteRecipient } from "../dto/delete.recipient.dto";

class RecipientService {
  
  async createRecipient(resource: CreateRecipient) {
    return await RecipientDao.createRecipient(resource);
  }

  async deleteRecipient(resource: DeleteRecipient) {
    return await RecipientDao.deleteRecipient(resource);
  }

  async getRecipients(resource: GetRecipients) {
    return await RecipientDao.getRecipients(resource);
  }
}

export default new RecipientService();
