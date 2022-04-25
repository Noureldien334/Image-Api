"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const imgProcessing_1 = __importDefault(require("./imgProcessing"));
const path = require('path');
const ImageApi = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const imName = req.query.filename;
    const leng = parseInt(req.query.len);
    const widt = parseInt(req.query.wid);
    if (!fs_1.default.existsSync(__dirname + `/../images/${imName}.jpg`)) {
        res.status(404).sendFile(path.resolve(__dirname + '/../images/404.jpg'));
    }
    else if (leng !== leng && widt !== widt)
        res.status(400).send('Please specify/Correct length and width');
    else if (leng !== leng)
        res.status(400).send('Please sepcify/Correct the Length');
    else if (widt !== widt)
        res.status(400).send('Please specify/Correct the Width');
    else {
        const newpath = yield (0, imgProcessing_1.default)(imName, leng, widt);
        res.status(200).sendFile(newpath);
    }
    next();
});
exports.default = ImageApi;
