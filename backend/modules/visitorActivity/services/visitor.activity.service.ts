import VisitorActivityDao from "../daos/visitor.activity.dao";
import visitorActivityS3Dao from "../daos/visitor.activity.s3.dao";
import { CreateFeedbackActivity } from "../dto/create.activity.dto";

class VisitorActivityService {
  async createFeedbackActivity(resource: CreateFeedbackActivity) {
    try {
      return VisitorActivityDao.createFeedbackActivity(resource);
    } catch(err) {
      console.log("Error in visitor activity service", err);
      throw new Error("Create Feedback Activity Error")
    }
  }

  async uploadActivityEvents(resource: any[]) {
    try {
      return await visitorActivityS3Dao.uploadActivityEvents(resource);
    } catch(err) {
      console.log("Error in visitor activity service::uploadActivityEvents::", err);
      throw new Error("Upload Activity Events Error");
    }
  }
}

export default new VisitorActivityService();
