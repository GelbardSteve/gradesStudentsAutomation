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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequest = void 0;
const axios_1 = require("axios");
class SendRequest {
    constructor() { }
    postRequest(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.post(url, data);
            return res;
        });
    }
    getRequest(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(url);
            return res;
        });
    }
    updateRequest(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.put(url, data);
            return res;
        });
    }
    deleteRequest(url, data, whatToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.delete(`${url}/${data[whatToDelete]}`);
            return res;
        });
    }
}
exports.sendRequest = new SendRequest();
//# sourceMappingURL=requests.js.map