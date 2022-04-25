import sharp from 'sharp';
import fs from 'fs';
import express from 'express';

const path = require('path');

const Resize = async (
    imName: string,
    leng: number,
    widt: number
): Promise<string> => {
    if (
        !fs.existsSync(__dirname + `/../../thumbs/${imName}${leng}x${widt}.jpg`)
    ) {
        await sharp(__dirname + `/../../images/${imName}.jpg`)
            .resize(leng, widt)
            .toFile(__dirname + `/../../thumbs/${imName}${leng}x${widt}.jpg`);
    }

    return path.resolve(
        __dirname + `/../../thumbs/${imName}${leng}x${widt}.jpg`
    );
};
export default Resize;
