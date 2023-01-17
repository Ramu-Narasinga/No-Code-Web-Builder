import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient, Status } from "@prisma/client";
import { CreateEmail } from "../dto/create.email.dto";
import { UpdateEmail } from "../dto/update.email.dto";
import { GetEmailsDto } from "../dto/get.emails.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class EmailDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of EmailDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async getEmails(payload: GetEmailsDto) {
    try {
      let {
        userId
      } = payload;

      console.log("payload before getwebsites command", payload);

      return await this.prisma.email.findMany({
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

  async createEmail(email: CreateEmail) {
    try {

      let data = {
        ...email,
        status: Status.DRAFT,
        html: process.env.emailDefaultTemplateHtml ?? '',
        css: process.env.emailDefaultTemplateCss ?? ''
      }
      console.log("data before create command");

      return await this.prisma.email.create({
        data
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
