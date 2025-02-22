import { Router } from 'express';
import { posterRouter } from './poster-routes.js';
import { detailsRouter } from './details-routes.js';
import { dbRouter } from './db-routes.js';

const router = Router();

router.use('/posters', posterRouter);
router.use('/details', detailsRouter);
router.use('/db', dbRouter);

export default router;
