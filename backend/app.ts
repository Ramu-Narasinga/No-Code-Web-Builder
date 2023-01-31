import debug from 'debug';
import dotenv from 'dotenv';
import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';

import {CommonRoutesConfig} from './modules/common/common.routes.config';
import { AuthRoutes } from './modules/auth/auth.routes.config';
import helmet from 'helmet';
import { WebsiteRoutes } from './modules/website/website.routes.config';
import { EmailRoutes } from './modules/email/email.routes.config';
import { EmailMetaRoutes } from './modules/email/subModules/emailMeta/email.meta.routes.config';
import { EmailMetaRecipientsRoutes } from './modules/email/subModules/recipient/recipients.routes.config';
import { VisitorActivityRoutes } from './modules/visitorActivity/visitor.activity.routes.config';

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 8080;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(helmet());

// here we are adding middleware to parse all incoming requests as JSON 

app.use(express.json());

// here we are adding middleware to allow cross-origin requests
const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig));

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
    if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
    }
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
// routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new WebsiteRoutes(app));
routes.push(new EmailRoutes(app));
routes.push(new EmailMetaRoutes(app));
routes.push(new EmailMetaRecipientsRoutes(app));
routes.push(new VisitorActivityRoutes(app));

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

export default server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(runningMessage);
});