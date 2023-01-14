import prismaService from "../../../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateRecipient } from "../dto/create.recipient.dto";
import { UpdateRecipient } from "../dto/update.recipient.dto";
import { GetRecipients } from "../dto/get.recipients.dto";

const log: debug.IDebugger = debug("app:email-meta-dao");

class RecipientDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of RecipientDao");
    this.prisma = prismaService.getPrismaClient();
  }

  _prepareData(recipient: CreateRecipient | UpdateRecipient) {
    return recipient.recipientEmail.map(re => {
      return {
        emailMetaId: recipient.emailMetaId,
        recipientEmail: re
      }
    })
  }

  async createRecipients(recipient: CreateRecipient) {

    try {
      return await this.prisma.recipient.createMany({
        data: this._prepareData(recipient)
      });
    } catch(err) {
      console.log("Error in createRecipients", err);
    } 
  }

  async updateRecipients(recipient: UpdateRecipient) {
    
    return await this.prisma.recipient.updateMany({
      where: {
        emailMetaId: recipient.emailMetaId
      },
      data: this._prepareData(recipient)
    });
  }

  async getRecipients(payload: GetRecipients) {
    try {
      return await this.prisma.recipient.findMany({
        where: {
          emailMetaId: payload.emailMetaId
        }
      })
    } catch(err) {
      console.log("Error in fetching recipients", err);
    }
  }
}

export default new RecipientDao();
