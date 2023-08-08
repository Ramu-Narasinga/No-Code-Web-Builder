import AWS from 'aws-sdk';
import { config } from 'dotenv';

class S3Helper {

  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  constructor() {
    config();
  }

  async upload(fileName: String, Body: Buffer | string) {
    try {
      const params = {
        Bucket: `${process.env.AWS_BUCKET_NAME}`,
        Key: `${fileName}`,
        Body
      }

      await this.s3.putObject(params).promise();

      return `${process.env.AWS_BUCKET_NAME}/${fileName}`;
    } catch(err) {
      console.log("Error in uploading events to s3", err);
      throw new Error("Error in uploading events");
    }
  }
}

export default new S3Helper();
