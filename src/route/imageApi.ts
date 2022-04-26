import express from 'express';
import ImageApi from '../utils/midWare';
import { Request, Response } from 'express';

const app = express();
const port: number = 5000;

app.get('/', (req: Request, res: Response): void => {
    res.send('Welcome to the Home Page');
});

app.get('/api', ImageApi, (req: Request, res: Response): void => {});

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});

export default app;
