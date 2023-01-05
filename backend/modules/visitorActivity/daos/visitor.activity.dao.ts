import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateFeedbackActivity } from "../dto/create.activity.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class VisitorActivityDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of VisitorActivityDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async createFeedbackActivity(feedbackActivity: CreateFeedbackActivity) {
    try {
      return await this.prisma.visitorActivity.create({
        data: {
          ...feedbackActivity
        },
      })
    } catch(err) {
      console.log("error in creating feedback in dao", err);
      throw new Error("Create Feedback Activity Error");
    } 
  }
}

export default new VisitorActivityDao();
