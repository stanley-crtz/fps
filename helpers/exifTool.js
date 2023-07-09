import exiftool from 'node-exiftool';
import exiftoolBin from 'dist-exiftool';

const ep = new exiftool.ExiftoolProcess(exiftoolBin);

const getMetadata = async (filePath) => {

    return await new Promise((resolve, reject) => {
        ep
            .open()
            // display pid
            .then((pid) => console.log('Started exiftool process %s', pid))
            .then(async () => {
                const resp = await ep.readMetadata(filePath, ['-File:all']);
                console.log('resp =>', resp);
                resolve(resp);
                return resp

            })
            .then(console.log, console.error)
            .then(() => ep.close())
            .then(() => console.log('Closed exiftool'))
            .catch(reject)
    })
}

export default getMetadata;