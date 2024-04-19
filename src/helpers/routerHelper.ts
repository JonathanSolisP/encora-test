import { Router } from "express";

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

export function CREATE(router: Router, url: string, handler: (req: any) => any) {
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