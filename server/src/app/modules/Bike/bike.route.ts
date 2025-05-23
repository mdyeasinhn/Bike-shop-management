import express from 'express';
import { BikeController } from './bike.controller';

const router = express.Router();

router.post('/', BikeController.createBike);
router.get('/', BikeController.getAllBikes);
router.get('/:id', BikeController.getSpecificBike);

export const BikeRoutes = router;