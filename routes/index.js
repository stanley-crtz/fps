import emailRouter from './email.js';
import exifToolsRouter from './exifTools.js';
import hashRouter from './hash.js';
import pentestingRouter from './pentesting.js'

import express from 'express'

const router = express.Router()

router.use('/pentesting', pentestingRouter)
router.use('/email', emailRouter)
router.use('/exifTools', exifToolsRouter)
router.use('/hash', hashRouter)

export default router;