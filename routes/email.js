import express from 'express'
import emailController from '../controllers/email.controller.js';

const emailRouter = express.Router();

emailRouter.post('/request', emailController.request)

export default emailRouter