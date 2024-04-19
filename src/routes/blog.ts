import { Router } from 'express';
import { GET, POST, DELETE, POST_WITH_UPLOAD} from '../helpers/routerHelper';
import {db} from '../database';

export function blogRouter(): Router {
    const router = Router();
    GET(router, '/blogs', () => db.blogs.list());
    GET(router, '/blogs/:id', req => db.blogs.get(req.params));
    // POST(router, '/blogs', req => db.blogs.create(req.body));
    POST_WITH_UPLOAD(router, '/blogs', req => db.blogs.createWithUpload(req.body, req.file));
    DELETE(router, '/blogs/:id', req => db.blogs.delete(req.params));
    return router;
}