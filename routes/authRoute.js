import express from 'express';
import {registerController, loginController, testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// Test routes
router.get('/test',requireSignIn, isAdmin, testController);

// protected route 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
});

export default router