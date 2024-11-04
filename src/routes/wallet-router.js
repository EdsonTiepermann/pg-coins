import { Router } from 'express';
import {
    store,
    index,
    update,
    destroy,
    verifyWallet
} from '../controllers/wallet-controller.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);
router.get('/wallet/:wallet_id/:user_id', verifyWallet);

export default router;