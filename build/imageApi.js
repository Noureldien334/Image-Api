"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const midWare_1 = __importDefault(require("./midWare"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});
app.get('/api', midWare_1.default, (req, res) => { });
app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
exports.default = app;
