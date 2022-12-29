import WebsiteDao from "../daos/website.dao";
import { CreateWebsiteDto, UpdateWebsiteDto } from "../dto/create.website.dto";


class WebsiteService {
  async createWebsite(resource: CreateWebsiteDto) {
    return WebsiteDao.createWebsite(resource);
  }

  async updateWebsite(resource: UpdateWebsiteDto) {
    return WebsiteDao.updateWebsite(resource);
  }
}

export default new WebsiteService();
