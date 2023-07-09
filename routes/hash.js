import hashController from '../controllers/hash.controller.js';
import upload from '../helpers/multer.js';
import express from 'express'

const hashRouter = express.Router();

hashRouter.post('/generate-hash', upload.single('file'), hashController.generated)

export default hashRouter