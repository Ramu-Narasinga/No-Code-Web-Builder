import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateWebsiteDto, UpdateWebsiteDto } from "../dto/create.website.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class WebsiteDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of WebsiteDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async createWebsite(website: CreateWebsiteDto) {
    return await this.prisma.website.create({
      data: {
        ...website
      },
    })
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
}

export default new WebsiteDao();
