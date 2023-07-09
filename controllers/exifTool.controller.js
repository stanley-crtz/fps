import getMetadata from "../helpers/exifTool.js";
import fs from 'fs';

const exifToolsController = {
    getMetadataByFile: async (req, res) => {

        console.log(req.file);

        try {
            const resp = await getMetadata(req.file.path)
            fs.unlinkSync(req.file.path);
            return res.status(200).send({
                data: resp.data,
                message: 'success'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'Error in the server'
            })
        }

    }
}

export default exifToolsController;