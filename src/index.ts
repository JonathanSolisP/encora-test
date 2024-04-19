import express, { Express, Request, Response } from "express";
import {db} from './database';
import dotenv from "dotenv";
const bodyParser = require('body-parser')

// TODO: REMOVE pgp?
// TODO: body-parser deprecated undefined extended: provide extended option src\index.ts:56:27
// TODO: middlewares for body parser maybe logging? 

dotenv.config();
const pgp = require('pg-promise')(/* options */)

const SERVER_PORT = parseInt(process.env.SERVER_PORT ?? '3000');
const app: Express = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

function GET(url: string, handler: (req: any) => any) {
    app.get(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error: any) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

function CREATE(url: string, handler: (req: any) => any) {
    app.post(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error: any) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

function DELETE(url: string, handler: (req: any) => any) {
    app.delete(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error: any) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

// list blogs:
GET('/blogs', () => db.blogs.list());

// get a blog by ID
GET('/blogs/:id', req => db.blogs.get(req.params));

// creates a blog
CREATE('/blogs', req => db.blogs.create(req.body));

// delete a blog by ID
DELETE('/blogs/:id', req => db.blogs.delete(req.params));

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`)
});