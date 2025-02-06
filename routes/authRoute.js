import express from 'express';
import {registerController, loginController, testController, forgotPasswordController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || METHOD POST
router.post('/login', loginController);

// Forgot Password || METHOD POST
router.post('/forgot-password', forgotPasswordController);


// Test routes
router.get('/test',requireSignIn, isAdmin, testController);

// protected route 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
});

export default router