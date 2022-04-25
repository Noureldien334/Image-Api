import app from '../route/imageApi';
import supertest from 'supertest';

describe(' Server responses testing ', () => {
    it('Return 200 as a successful response', async () => {
        await supertest(app)
            .get('/api?filename=img3&len=300&wid=400')
            .expect(200);
    });

    it('Return 404 if image isnt found', async () => {
        await supertest(app)
            .get('/api?filename=dummyImage&len=300&wid=400')
            .expect(404);
    });

    it('Return 400 if length is missing', async () => {
        await supertest(app).get('/api?filename=img2&wid=400').expect(400);
    });
    it('Return 400 as if width is missing', async () => {
        await supertest(app).get('/api?filename=img3&len=300').expect(400);
    });
});
