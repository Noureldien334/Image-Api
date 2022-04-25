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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path = require('path');
const Resize = (imName, leng, widt) => __awaiter(void 0, void 0, void 0, function* () {
    if (!fs_1.default.existsSync(__dirname + `/../thumbs/${imName}${leng}x${widt}.jpg`)) {
        yield (0, sharp_1.default)(__dirname + `/../images/${imName}.jpg`)
            .resize(leng, widt)
            .toFile(__dirname + `/../thumbs/${imName}${leng}x${widt}.jpg`);
    }
    return path.resolve(__dirname + `/../thumbs/${imName}${leng}x${widt}.jpg`);
});
exports.default = Resize;
