import crypto from 'crypto';
import fs from "fs";

const generateMD5 = (filepath) => {
    return new Promise((res, rej) => {
        const hash = crypto.createHash('md5');

        const rStream = fs.createReadStream(filepath);
        rStream.on('data', (data) => {
            hash.update(data);
        });
        rStream.on('end', () => {
            res(hash.digest('hex'));
        });
    })
}

const generateSha1 = (filepath) => {
    const fileBuffer = fs.readFileSync(filepath);
    const hashSum = crypto.createHash('sha1');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    return hex;
}

const generateHash = async (filepath) => {
    const md5 = await generateMD5(filepath);
    const sha1 = await generateSha1(filepath);

    return {
        md5,
        sha1
    }
}

export default generateHash;