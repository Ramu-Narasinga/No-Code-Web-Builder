import AWS from 'aws-sdk';
import debug from "debug";
import { config } from 'dotenv';

const log: debug.IDebugger = debug("app:in-memory-dao");

class VisitorActivityS3Dao {

  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  constructor() {
    log("Created new instance of VisitorActivityS3Dao", process.env.AWS_BUCKET_NAME);
    config();
  }

  async uploadActivityEvents(events: any[]) {
    try {
      const filename = Date.now();
      console.log("process.env.AWS_BUCKET_NAME", process.env.AWS_BUCKET_NAME);
      const params = {
        Bucket: `${process.env.AWS_BUCKET_NAME}`,
        Key: `${filename}`,
        Body: JSON.stringify(events)
      }

      await this.s3.putObject(params).promise();

      return `${process.env.AWS_BUCKET_NAME}/${filename}`;
    } catch(err) {
      console.log("Error in uploading events to s3", err);
      throw new Error("Error in uploading events");
    }
  }

  async getActivityEvents(filename: string) {
    try {
      console.log("inside getActivity event", filename);
      
      return this.s3.getObject({
        Bucket: `${process.env.AWS_BUCKET_NAME}`,
        Key: `${filename}`
      }).promise();
    } catch(err) {
      console.log("Error in fetching activity events");
      throw new Error("Error in fetching events");
    }
  }
}

export default new VisitorActivityS3Dao();
