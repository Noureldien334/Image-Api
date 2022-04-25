import express from 'express';
import ImageApi from '../utils/midWare';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/api', ImageApi, (req, res) => {});

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});

export default app;
