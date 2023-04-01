

import express from "express";
import config from "./config/config.js";
import glob from "glob";
import mongoose from "mongoose";
import { appExpress } from "./config/express.js";

mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db);
});

const app = express();
appExpress(app, config);

app.listen(config.port, () => {
  console.log('http://localhost:3000');
});
