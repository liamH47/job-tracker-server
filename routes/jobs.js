import express from 'express';
import { getJobs, createJob, updateJob, deleteJob } from '../controllers/jobs.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getJobs);
router.post('/', auth, createJob);
router.patch('/:id', auth, updateJob);
router.delete('/:id', auth, deleteJob);

export default router;