import WebsiteDao from "../daos/website.dao";
import { CreateWebsiteDto } from "../dto/create.website.dto";


class WebsiteService {
  async createWebsite(resource: CreateWebsiteDto) {
    return WebsiteDao.createWebsite(resource);
  }
}

export default new WebsiteService();
