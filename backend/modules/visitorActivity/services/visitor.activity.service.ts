import { config } from "dotenv";
import fetch from "node-fetch";

import VisitorActivityDao from "../daos/visitor.activity.dao";
import VisitorActivityS3Dao from "../daos/visitor.activity.s3.dao";
import { CreateFeedbackVisitorActivity, CreateVisitorActivity } from "../dto/create.activity.dto";

class VisitorActivityService {

  constructor() {
    config();
  }

  async getVisitorActivity(getVisitorActivityPayload: { userId: number }) {
    try {
      return await VisitorActivityDao.getVisitorActivity(getVisitorActivityPayload);
    } catch(err) {
      console.log("Error in visitor activity service", err);
    }
  }

  async getVisitorActivityDetails(fileName: string) {
    try {
      console.log("calling dao", fileName);
      return await VisitorActivityS3Dao.getActivityEvents(fileName);
    } catch(err) {
      console.log("Error in visitor activity service", err);
    }
  }

  async createFeedbackActivity(resource: CreateFeedbackVisitorActivity) {
    try {

      resource = await this._getUpdatedActivityResource(resource);

      return await VisitorActivityDao.createFeedbackActivity(resource);
    } catch(err) {
      console.log("Error in visitor activity service", err);
      throw new Error("Create Feedback Activity Error")
    }
  }

  async _getUpdatedActivityResource(resource: CreateFeedbackVisitorActivity): Promise<CreateFeedbackVisitorActivity> {
    resource = await this.uploadEventsToS3AndReturnEventsUrl(resource);
    resource = await this._getUpdatedVisitorInfoResource(resource);
    return resource;
  }

  async uploadEventsToS3AndReturnEventsUrl(resource: CreateFeedbackVisitorActivity): Promise<CreateFeedbackVisitorActivity> {
    let activityEventsUrl = await VisitorActivityS3Dao.uploadActivityEvents(resource.activityEvents ?? []);
    resource.activityEventsUrl = activityEventsUrl;
    delete resource.activityEvents;
    return resource;
  }

  async _getUpdatedVisitorInfoResource(resource: CreateFeedbackVisitorActivity): Promise<CreateFeedbackVisitorActivity> {
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
