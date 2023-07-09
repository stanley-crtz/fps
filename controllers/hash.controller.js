import generateHash from "../helpers/hashes.js";
import fs from 'fs';

const hashController = {
    generated: async (req, res) => {

        const hashes = await generateHash(req.file.path)

        fs.unlinkSync(req.file.path);

        return res.status(200).send({
            hashes,
            message: 'success'
        })

    }
}

export default hashController;