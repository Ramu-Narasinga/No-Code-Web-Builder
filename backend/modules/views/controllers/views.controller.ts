import express from "express";
import debug from "debug";
import ViewsService from "../service/views.service";

const log: debug.IDebugger = debug("app:rmr-controller");

class RmRController {
  constructor() {}

  async getViews(req: express.Request, res: express.Response) {
    // Update SVG with the provided count
    let updatedSvg = ViewsService.updateSvgWithCount(0);
    try {
      const url: string = (req.query.url ? req.query.url : "") as string;
      const count = await ViewsService.incrViewsCount(url);
      // Update SVG with the provided count
      updatedSvg = ViewsService.updateSvgWithCount(count);
    } catch (err) {
      console.error("Error incrementing visitor count:", err);
    }

    // Set the response Content-Type to "image/svg+xml" for SVG content
    res.set("Content-Type", "image/svg+xml");
    // Send the updated SVG as the response
    res.send(updatedSvg);
  }
}

export default new RmRController();
