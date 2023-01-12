import { config } from "dotenv";
import fetch from "node-fetch";
import VisitorActivityDao from "../daos/visitor.activity.dao";
import VisitorActivityS3Dao from "../daos/visitor.activity.s3.dao";
import { CreateFeedbackActivity } from "../dto/create.activity.dto";

class VisitorActivityService {

  constructor() {
    config();
  }

  async createFeedbackActivity(resource: CreateFeedbackActivity) {
    try {

      resource = await this._getUpdatedActivityResource(resource);

      return await VisitorActivityDao.createFeedbackActivity(resource);
    } catch(err) {
      console.log("Error in visitor activity service", err);
      throw new Error("Create Feedback Activity Error")
    }
  }

  async _getUpdatedActivityResource(resource: CreateFeedbackActivity) {
    resource = await this._getUpdatedActivityEventsUrlResource(resource);
    resource = await this._getUpdatedVisitorInfoResource(resource);
    return resource;
  }

  async _getUpdatedActivityEventsUrlResource(resource: CreateFeedbackActivity) {
    let activityEventsUrl = await VisitorActivityS3Dao.uploadActivityEvents(resource.activityEvents ?? []);
    resource.activityEventsUrl = activityEventsUrl;
    delete resource.activityEvents;
    return resource;
  }

  async _getUpdatedVisitorInfoResource(resource: CreateFeedbackActivity) {
    const request = await fetch(`${process.env.IPINFO}`);
    const jsonResponse: any = await request.json();

    console.log(jsonResponse.ip, jsonResponse.country);

    resource['ip'] = jsonResponse.ip;
    resource['city'] = jsonResponse.city;
    resource['region'] = jsonResponse.region;
    resource['country'] = jsonResponse.country;

    return resource;
  }
}

export default new VisitorActivityService();
