import { Router } from 'express';

import { cacheHtml, request } from '../middlewares';
import home from './home';
import register from './register';
import login from './login';
import logout from './logout';
import dashboard from './dashboard';
import invoice from './invoice';
import qr from './qr';

const router = Router();

// Endpoints
router.get('/register', register);
router.get('/login', login);
router.get('/logout', logout);
router.get('/dashboard', dashboard);
router.get('/qr/:address/:amount', qr);
router.get('/pay/:id', request, invoice);
router.get('/', cacheHtml, home);

export default router;
