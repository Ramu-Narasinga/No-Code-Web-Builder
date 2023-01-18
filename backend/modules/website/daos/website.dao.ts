import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { Prisma, PrismaClient } from "@prisma/client";
import { CreateWebsiteDto, UpdateWebsiteDto } from "../dto/create.website.dto";
import { DeleteWebsiteDto, GetWebsiteDto, GetWebsitesDto } from "../dto/get.websites.dto";
import { Status } from "../../email/dto/create.email.dto";
import { config } from "dotenv";

const log: debug.IDebugger = debug("app:in-memory-dao");
class WebsiteDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of WebsiteDao");
    this.prisma = prismaService.getPrismaClient();
    config();
  }

  async getWebsiteById(payload: GetWebsiteDto) {
    try {
      let {
        id
      } = payload;

      console.log("payload before getwebsites command", payload);

      return await this.prisma.website.findUnique({
        where: {
          id
        }
      })
    } catch(err) {
      console.log("found err:", err);
      throw new Error('Errro encountered in fetching email by id');
    }
  }

  async getWebsites(payload: GetWebsitesDto) {
    try {
      let {
        userId
      } = payload;

      console.log("payload before getwebsites command", payload);

      return await this.prisma.website.findMany({
        where: {
          userId:  {
            equals: userId
          }
        }
      })
    } catch(err) {
      console.log("found err:", err);
      throw new Error('Errro encountered in fetching websites');
    }
  }

  async createWebsite(website: CreateWebsiteDto) {    
    try {
      let data = {
        ...website,
        status: Status.DRAFT,
        html: process.env.websiteDefaultTemplateHtml ?? '',
        css: process.env.websiteDefaultTemplateCss ?? ''
      }
      console.log("data before create command");
      return await this.prisma.website.create({
        data
      })
    } catch(err) {
      console.log("found err:", err);
      throw new Error('Errro encountered in creating website');
    }
  }

  async updateWebsite(website: UpdateWebsiteDto) {
    return await this.prisma.website.update({
      where: {
        id: website.id
      },
      data: {
        ...website
      },
    })
  }

  async deleteWebsite(deleteWebsiteByIdPayload: DeleteWebsiteDto) {
    return await this.prisma.website.delete({
      where: {
        id: deleteWebsiteByIdPayload.id
      }
    });
  }
}

export default new WebsiteDao();