import { blogRouter } from './blog';
import { Express } from 'express';

export function loadRoutes(app: Express) {
    app.use(blogRouter());
}