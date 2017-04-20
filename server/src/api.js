// https://github.com/zen-js-code/react-universal-web-apps/blob/simple%2Bssr/app/infra/route-manager.js

import fs from 'fs';
import path from 'path';
import express from 'express';

export default class APIHandler {
  constructor() {
    this.router = this.buildRouter();
  }

  buildRouter() {
    const router = express.Router();

    // http://stackoverflow.com/questions/13442377/redirect-all-trailing-slashes-globally-in-express
    router.use((req, res, next) => {
      if (req.url.substr(-1) == '/' && req.url.length > 1) {
        res.redirect(301, req.url.slice(0, -1));
      } else {
        next();
      }
    });

    return router;
  }

  shareRouter() {
    return this.router;
  }

  createAPICalls() {
    const self = this;

    this.router.route('/preferences')
      .get(function(req, res){
        self.retrievePreferences((err, data) => {
          if (!err) {
            res.json(JSON.parse(data));
          } else {
            res.status(500).send();
          }
        });
      });

    this.router.route('/quiz')
      .get(function(req, res){
        self.retrieveQuiz((err, data) => {
          if (!err) {
            res.json(JSON.parse(data));
          } else {
            res.status(500).send();
          }
        });
      });
  }

  retrievePreferences(callback) {
    const filePath = path.join(__dirname, '..', '..', 'shared', 'json', 'preferences.json');
    fs.readFile(filePath, 'utf-8', callback);
  }

  retrieveQuiz(callback) {
    const filePath = path.join(__dirname, '..', '..', 'shared', 'json', 'quiz.json');
    fs.readFile(filePath, 'utf-8', callback);
  }
}
