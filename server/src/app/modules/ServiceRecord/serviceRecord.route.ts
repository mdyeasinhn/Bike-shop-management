import express from 'express';
import { ServiceRecordController } from './serviceRecord.controller';


const router = express.Router();

router.post('/', ServiceRecordController.createService);
router.get('/', ServiceRecordController.getAllServices);


export const ServiceRecordRoutes = router;