import express, { Express, Request, Response } from "express";
import {db} from './database';
import dotenv from "dotenv";

dotenv.config();
const pgp = require('pg-promise')(/* options */)

const SERVER_PORT = parseInt(process.env.SERVER_PORT ?? '3000');
const app: Express = express();

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

// delete a blog by ID
DELETE('/blogs/:id', req => db.blogs.delete(req.params));

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`)
});