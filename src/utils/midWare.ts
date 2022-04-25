import express from 'express';
import fs from 'fs';
import Resize from './imgProcessing';

const path = require('path');

const ImageApi = async (
    req: express.Request,
    res: express.Response,
    next: Function
): Promise<void> => {
    const imName: string = req.query.filename as string;
    const leng: number = parseInt(req.query.len as string);
    const widt: number = parseInt(req.query.wid as string);

    if (!fs.existsSync(__dirname + `/../../images/${imName}.jpg`)) {
        res.status(404).sendFile(
            path.resolve(__dirname + '/../../images/404.jpg')
        );
    } else if (leng !== leng && widt !== widt)
        res.status(400).send('Please specify/Correct length and width');
    else if (leng !== leng)
        res.status(400).send('Please sepcify/Correct the Length');
    else if (widt !== widt)
        res.status(400).send('Please specify/Correct the Width');
    else {
        const newpath: string = await Resize(imName, leng, widt);
        res.status(200).sendFile(newpath);
    }

    next();
};

export default ImageApi;
