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
const requests_1 = require("../page-objects/http-requests/requests");
const chai_1 = require("chai");
const postStudent = {
    students_name: "students101",
    students_number: "101",
};
const postStudentGrades = {
    studentsGrades: "History: 100",
    students_number: "101",
};
const updateStudentGrades = {
    studentsGrades: "History: 50",
};
const deleteStudentGrades = {};
describe("run API requests", () => {
    it("should create student", () => __awaiter(void 0, void 0, void 0, function* () {
        yield requests_1.sendRequest
            .postRequest("http://localhost:3000/students2", postStudent)
            .then((res) => {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.data).to.equal("successful");
        });
    }));
    it("should create student grades", () => __awaiter(void 0, void 0, void 0, function* () {
        yield requests_1.sendRequest
            .postRequest("http://localhost:3000/grades", postStudentGrades)
            .then((res) => {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.data).to.equal("successful");
        });
    }));
    it("should get student data", () => __awaiter(void 0, void 0, void 0, function* () {
        yield requests_1.sendRequest
            .getRequest("http://localhost:3000/students2/101")
            .then((res) => {
            updateStudentGrades["students_id"] = res.data[0].students_id;
            deleteStudentGrades["students_id"] = res.data[0].students_id;
            chai_1.expect(res.data[0]).to.include({ students_number: 101 });
        });
    }));
    it("should update student grades", () => __awaiter(void 0, void 0, void 0, function* () {
        yield requests_1.sendRequest
            .updateRequest("http://localhost:3000/grades", updateStudentGrades)
            .then((res) => {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.data).to.equal("Update succeed");
        });
    }));
    it("should delete student", () => __awaiter(void 0, void 0, void 0, function* () {
        yield requests_1.sendRequest
            .deleteRequest("http://localhost:3000/students2", deleteStudentGrades, "students_id")
            .then((res) => {
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.data).to.include({ succeed: true });
        });
    }));
});
//# sourceMappingURL=requestsAPI.spec.js.map