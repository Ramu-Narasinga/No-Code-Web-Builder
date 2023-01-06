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
    log("Created new instance of VisitorActivityS3Dao");
    config();
  }

  async uploadActivityEvents(events: string) {
    try {
      const filename = Date.now();

      const params = {
        Bucket: `${process.env.AWS_BUCKET_NAME}`,
        Key: `${filename}`,
        Body: events
      }

      let s3UploadRes = await this.s3.upload(params);
      return s3UploadRes;
    } catch(err) {
      console.log("Error in uploading events to s3", err);
    }
  }
}

export default new VisitorActivityS3Dao();
