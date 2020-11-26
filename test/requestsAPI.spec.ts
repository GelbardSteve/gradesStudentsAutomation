import { sendRequest } from "../page-objects/http-requests/requests";
import { expect } from "chai";

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
  it("should create student", async () => {
    await sendRequest
      .postRequest("http://localhost:3000/students2", postStudent)
      .then((res) => {
        expect(res.data).to.equal("successful");
      });
  });

  it("should create student grades", async () => {
    await sendRequest
      .postRequest("http://localhost:3000/grades", postStudentGrades)
      .then((res) => {
        expect(res.data).to.equal("successful");
      });
  });

  it("should get student data", async () => {
    await sendRequest
      .getRequest("http://localhost:3000/students2/101")
      .then((res) => {
        updateStudentGrades["students_id"] = res.data[0].students_id;
        deleteStudentGrades["students_id"] = res.data[0].students_id;
        expect(res.data[0]).to.include({ students_number: 101 });
      });
  });

  it("should update student grades", async () => {
    await sendRequest
      .updateRequest("http://localhost:3000/grades", updateStudentGrades)
      .then((res) => {
        expect(res.data).to.equal("Update succeed");
      });
  });

  it("should delete student", async () => {
    await sendRequest
      .deleteRequest("http://localhost:3000/students2", deleteStudentGrades, "students_id")
      .then((res) => {
        expect(res.data).to.include({ succeed: true });
      });
  });
});
