import { Router } from 'express';

import branchService from '../service/branch';

const router = Router();

router.get('/', branchService.listBranch);
router.post('/', branchService.addBranch);

export default router;
