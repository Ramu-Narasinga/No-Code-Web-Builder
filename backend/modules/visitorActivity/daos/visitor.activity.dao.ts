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

      let visitorActivityData: any = {
        activityType: feedbackActivity.activityType,
        ip: feedbackActivity.ip,
        city: feedbackActivity.city,
        region: feedbackActivity.region,
        country: feedbackActivity.country,
        userId: +feedbackActivity.userId,
        websiteId: +feedbackActivity.websiteId,
        activityEventsUrl: feedbackActivity.activityEventsUrl
      }

      if (feedbackActivity && feedbackActivity.rating) {
        visitorActivityData["feedbackActivity"] = {
          create: {
            rating: feedbackActivity.rating,
            comment: feedbackActivity.comment,
          }
        }
      } else {
        visitorActivityData["errorActivity"] = {
          create: {
            endpoint: feedbackActivity.endpoint
          }
        }
      }

      return await this.prisma.visitorActivity.create({
        data: {
          ...visitorActivityData, 
        }
      })
    } catch(err) {
      console.log("error in creating feedback in dao", err);
      throw new Error("Create Feedback Activity Error");
    } 
  }

  async updateFeedbackActivityComment(feedbackActivity: {id: number; comment: string;}) {
    return await this.prisma.feedbackActivity.update({
      where: {
        id: feedbackActivity.id,
      },
      data: {
        comment: feedbackActivity.comment,
      },
    })
  }

  async getVisitorActivity(data: {userId: number}) {
    return await this.prisma.visitorActivity.findMany({
      where: {
        userId: data.userId
      },
      select: {        
        website: {
          select: {
            title: true,
            id: true
          }
        },
        feedbackActivity: true,
        errorActivity: true,
        city: true,
        id: true,
        activityType: true,
        region: true,
        country: true,
        activityEventsUrl: true,
        createdAt: true
      }
    })
  }
}

export default new VisitorActivityDao();
