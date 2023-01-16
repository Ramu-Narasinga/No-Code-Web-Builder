import WebsiteDao from "../daos/website.dao";
import { CreateWebsiteDto, UpdateWebsiteDto } from "../dto/create.website.dto";


class WebsiteService {
  async createWebsite(createWebsitePayload: CreateWebsiteDto) {
    try {
      return WebsiteDao.createWebsite(createWebsitePayload);
    } catch(err) {
      console.log("Error in create website service", err);
      throw new Error('Errro encountered in creating website');
    }
  }

  async updateWebsite(resource: UpdateWebsiteDto) {
    return WebsiteDao.updateWebsite(resource);
  }
}

export default new WebsiteService();
