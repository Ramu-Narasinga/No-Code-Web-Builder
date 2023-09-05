import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import ViewController from "./controllers/views.controller";

export class ViewsRoutes extends CommonRoutesConfig {
  
  constructor(app: express.Application) {
    super(app, "ViewsRoutes");
  }

  configureRoutes(): express.Application {
    
    this.app.get(`/api/count/incr/badge.svg`, [
      ViewController.getViews,
    ]);

    return this.app;
  }
}
