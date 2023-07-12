import prismaService from "../../../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateRecipient } from "../dto/create.recipient.dto";
import { DeleteRecipient } from "../dto/delete.recipient.dto";
import { GetRecipients } from "../dto/get.recipients.dto";

const log: debug.IDebugger = debug("app:email-meta-dao");

class RecipientDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of RecipientDao");
    this.prisma = prismaService.getPrismaClient();
  }

  _prepareData(recipient: CreateRecipient) {
    return {
      emailMetaId: recipient.emailMetaId,
      recipientEmail: recipient.recipientEmail
    }
  }

  async createRecipient(recipient: CreateRecipient) {

    try {
      return await this.prisma.recipient.create({
        data: {
          ...this._prepareData(recipient)
        }
      });
    } catch(err) {
      console.log("Error in createRecipients", err);
    } 
  }

  async deleteRecipient(recipient: DeleteRecipient) {
    
    return await this.prisma.recipient.delete({
      where: {
        id: recipient.id
      },
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
