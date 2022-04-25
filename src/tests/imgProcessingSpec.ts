import Resize from '../utils/imgProcessing';

const path = require('path');

describe('Image Resizing', () => {
    it('Check If the Resized image is created', async () => {
        const resizedPath = await Resize('img3', 500, 400);
        expect(resizedPath).toEqual(
            path.resolve(__dirname + '/../../thumbs/img3500x400.jpg')
        );
    });
});
