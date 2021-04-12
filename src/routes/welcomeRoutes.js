import { Router } from 'express';
import code from '../helper/statusCode';
import Response from '../helper/sendResponse';

const router = Router();

router.get('/', (_req, res) => Response.success(res, code.ok, 'Welcome to my portfolio'));

export default router;
