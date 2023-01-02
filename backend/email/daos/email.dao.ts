import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateEmail } from "../dto/create.email.dto";
import { UpdateEmail } from "../dto/update.email.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class EmailDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of EmailDao");
    this.prisma = prismaService.getPrismaClient();
  }



  async createEmail(email: CreateEmail) {
    try {
      return await this.prisma.email.create({
        data: {
          ...email,
          emailMeta: {
            create: {
              fromName: "",
              subject: ""
            }
          }
        },
      });
    } catch(err) {
      console.error("Error in creating email %0", err);
    }

  }

  async updateEmail(email: UpdateEmail) {
    return await this.prisma.email.update({
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
