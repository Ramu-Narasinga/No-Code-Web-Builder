import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateEmailDto, UpdateEmailDto } from "../dto/create.email.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class EmailDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of EmailDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async createEmail(email: CreateEmailDto) {
    return await this.prisma.website.create({
      data: {
        ...email
      },
    })
  }

  async updateEmail(email: UpdateEmailDto) {
    return await this.prisma.website.update({
      where: {
        id: email.id
      },
      data: {
        ...email
      },
    })
  }
}

export default new EmailDao();
