import express from "express";
import debug from "debug";
import websiteService from "../services/website.service";

const log: debug.IDebugger = debug("app:website-controller");

class WebsiteController {
 
  async getWebsites(req: express.Request, res: express.Response) {
    try {
      let userId = res.locals.jwt.userId;
      let getWebsitesPayload = {
        userId
      }
      log(await websiteService.getWebsites(getWebsitesPayload));
      res.status(200).send();
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }

  async createWebsite(req: express.Request, res: express.Response) {
    try {
      console.log("res.locals.jwt:", res.locals.jwt);
      let userId = res.locals.jwt.userId;
      let createWebsitePayload = {
        ...req.body,
        userId
      }
      log(await websiteService.createWebsite(createWebsitePayload));
      res.status(200).send();
    } catch (err) {
      log("create website error: %O", err);
      return res.status(500).send();
    }
  }

  async updateWebsite(req: express.Request, res: express.Response) {
    try {
      log(await websiteService.updateWebsite(req.body));
      res.status(200).send();
    } catch (err) {
      log("update website error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new WebsiteController();
