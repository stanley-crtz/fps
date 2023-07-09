import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'multer_files')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        // const name = file.originalname.split('.')[0]
        // const extension = file.originalname.split('.')[1]
        // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension)
        cb(null, file.originalname)
    }
});

const upload = multer({
    dest: 'multer_files',
    storage
})

export default upload