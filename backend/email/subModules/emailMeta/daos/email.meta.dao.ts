import prismaService from "../../../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { UpdateEmailMeta } from "../dto/update.email.meta.dto";
import { GetEmailByMetaId } from "../dto/get.email.by.meta.dto";

const log: debug.IDebugger = debug("app:email-meta-dao");

class EmailMetaDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of EmailDao");
    this.prisma = prismaService.getPrismaClient();
  }
  async updateEmailMeta(emailMeta: UpdateEmailMeta) {
    
    return await this.prisma.emailMeta.update({
      where: {
        id: emailMeta.id
      },
      data: {
        ...emailMeta,
      },
    })
  }

  async getEmail(payload: GetEmailByMetaId) {
    return await this.prisma.emailMeta.findUnique({
      where: {
        id: payload.emailMetaId
      },
      include: {
        email: true
      }
    })
  }
}

export default new EmailMetaDao();
