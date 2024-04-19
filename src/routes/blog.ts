import { Router } from 'express';
import { GET, CREATE, DELETE} from '../helpers/routerHelper';
import {db} from '../database';

export function blogRouter(): Router {
    const router = Router();
    GET(router, '/blogs', () => db.blogs.list());
    GET(router, '/blogs/:id', req => db.blogs.get(req.params));
    CREATE(router, '/blogs', req => db.blogs.create(req.body));
    DELETE(router, '/blogs/:id', req => db.blogs.delete(req.params));
    return router;
}