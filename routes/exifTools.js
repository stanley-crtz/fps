import express from 'express'
import exifToolController from '../controllers/exifTool.controller.js';
import upload from '../helpers/multer.js';

const exifToolRouter = express.Router();

exifToolRouter.post('/get-metadata', upload.single('file'), exifToolController.getMetadataByFile)

export default exifToolRouter