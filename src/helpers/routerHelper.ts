import { Router } from "express";
var multer = require('multer');

var upload = multer({ dest: 'uploads/' });

var type = upload.single('photo');

export function GET(router: Router, url: string, handler: (req: any) => any) {
    router.get(url, async (req, res) => {
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

export function POST(router: Router, url: string, handler: (req: any) => any) {
    router.post(url, async (req, res) => {
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

export function POST_WITH_UPLOAD(router: Router, url: string, handler: (req: any) => any) {
    router.post(url, type, async (req, res) => {
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

export function DELETE(router: Router, url: string, handler: (req: any) => any) {
    router.delete(url, async (req, res) => {
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