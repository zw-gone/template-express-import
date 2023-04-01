import express from "express";
import { Article } from "../models/article.js";
const router = express.Router();

export const homeRouter = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.send({
      code: 200,
      data: articles
    })
  });
});
