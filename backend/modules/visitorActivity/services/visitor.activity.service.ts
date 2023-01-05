import VisitorActivityDao from "../daos/visitor.activity.dao";
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
}

export default new VisitorActivityService();
