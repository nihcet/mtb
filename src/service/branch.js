import { branchRepo } from '../repository';

const branchService = {};

branchService.listBranch = async (req, res, next) => {
    try {
        const { rows } = await branchRepo.listBranch();
        res.json(rows);
    } catch (err) {
        res.status(500).send({message: 'server internal error', error: err});
    }
};

branchService.addBranch = async (req, res, next) => {
    try {
        const branches = req.body || [];
        const addBranchPromises = branches.map((branch) => branchRepo.addBranch(branch));

        await Promise.all(addBranchPromises);
        res.status(200).send({message: 'successfully add branch(es)'});
    } catch (err) {
        res.status(500).send({message: 'server internal error', error: err});
    }
}

export default branchService;
