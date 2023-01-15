import prismaService from "../../common/services/prisma.service";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import { CreateFeedbackVisitorActivity } from "../dto/create.activity.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class VisitorActivityDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of VisitorActivityDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async createFeedbackActivity(feedbackActivity: CreateFeedbackVisitorActivity) {
    try {

      let visitorActivityData = {
        activityType: feedbackActivity.activityType,
        ip: feedbackActivity.ip,
        city: feedbackActivity.city,
        region: feedbackActivity.region,
        country: feedbackActivity.country,
        userId: feedbackActivity.userId,
        websiteId: feedbackActivity.websiteId,
        activityEventsUrl: feedbackActivity.activityEventsUrl
      }

      return await this.prisma.visitorActivity.create({
        data: {
          ...visitorActivityData,
          feedbackActivity: {
            create: {
              rating: feedbackActivity.rating,
              comment: feedbackActivity.comment,
            }
          }
        }
      })
    } catch(err) {
      console.log("error in creating feedback in dao", err);
      throw new Error("Create Feedback Activity Error");
    } 
  }
}

export default new VisitorActivityDao();
