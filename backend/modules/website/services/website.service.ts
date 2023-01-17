import WebsiteDao from "../daos/website.dao";
import { CreateWebsiteDto, UpdateWebsiteDto } from "../dto/create.website.dto";
import { GetWebsitesDto, GetWebsiteDto } from "../dto/get.websites.dto";


class WebsiteService {

  async getWebsiteById(getWebsiteByIdPayload: GetWebsiteDto) {
    try {
      return WebsiteDao.getWebsiteById(getWebsiteByIdPayload);
    } catch(err) {
      console.log("Error in get website service", err);
      throw new Error("Error in fetching websites");
    }
  }

  async getWebsites(getWebsitesPayload: GetWebsitesDto) {
    try {
      return WebsiteDao.getWebsites(getWebsitesPayload);
    } catch(err) {
      console.log("Error in get website service", err);
      throw new Error("Error in fetching websites");
    }
  }

  async createWebsite(createWebsitePayload: CreateWebsiteDto) {
    try {
      return await WebsiteDao.createWebsite(createWebsitePayload);
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
