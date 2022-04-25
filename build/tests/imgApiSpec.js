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
const imageApi_1 = __importDefault(require("../route/imageApi"));
const supertest_1 = __importDefault(require("supertest"));
describe(' Server responses testing ', () => {
    it('Return 200 as a successful response', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(imageApi_1.default)
            .get('/api?filename=img3&len=300&wid=400')
            .expect(200);
    }));
    it('Return 404 if image isnt found', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(imageApi_1.default)
            .get('/api?filename=dummyImage&len=300&wid=400')
            .expect(404);
    }));
    it('Return 400 if length is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(imageApi_1.default).get('/api?filename=img2&wid=400').expect(400);
    }));
    it('Return 400 as if width is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(imageApi_1.default).get('/api?filename=img3&len=300').expect(400);
    }));
});
