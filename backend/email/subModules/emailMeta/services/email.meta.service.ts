import EmailMetaDao from "../daos/email.meta.dao";
import { GetEmailByMetaId } from "../dto/get.email.by.meta.dto";
import { UpdateEmailMeta } from "../dto/update.email.meta.dto";

class EmailMetaService {
  
  async updateEmailMeta(resource: UpdateEmailMeta) {
    return await EmailMetaDao.updateEmailMeta(resource);
  }

  async getEmailByMetaId(resource: GetEmailByMetaId) {
    return await EmailMetaDao.getEmail(resource);
  }
}

export default new EmailMetaService();
