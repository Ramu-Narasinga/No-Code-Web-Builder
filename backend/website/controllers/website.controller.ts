import express from "express";
import debug from "debug";
import websiteService from "../services/website.service";

const log: debug.IDebugger = debug("app:website-controller");

class WebsiteController {
 
  async createWebsite(req: express.Request, res: express.Response) {
    try {
      log(await websiteService.createWebsite(req.body));
      res.status(200).send();
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new WebsiteController();
