import express, { Express } from 'express';
import bodyParser from 'body-parser';
var multer = require('multer');
var forms = multer();

// TODO: Add logging
export function loadMiddlewares(app: Express) {
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.use(express.json());       // to support JSON-encoded bodies
    app.use(express.urlencoded()); // to support URL-encoded bodies
}