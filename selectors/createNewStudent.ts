const createNewUserS = {
    InserStudentBtn: [
        "Insert Student Btn",
        "body > app-root > app-admin-dashboard > div > div > div:nth-child(1) > button",
    ],
    StudentNameField: [
        "Student Name Field",
        "#students_name",
        "students99"
    ],
    StudentNameFieldValidation: [
        "Student Name Field Validation",
        "body > app-root > app-admin-dashboard > div > div > div:nth-child(1) > post-students-form > form > div > div:nth-child(1) > div:nth-child(1) > div",
        "Name Is Required"
    ],
    StudentNumberField: [
        "Student Number Field",
        "#students_number",
        "99"
    ],
    StudentNumberFieldValidation: [
        "Student Number Field Validation",
        "body > app-root > app-admin-dashboard > div > div > div:nth-child(1) > post-students-form > form > div > div:nth-child(1) > div:nth-child(2) > div > div",
        "Student Number Required"
    ],
    StudentGradesField: [
        "Student Grades Field",
        "#studentsGrades",
        "History: 100"
    ],
    StudentGradesFieldValidation: [
        "Student Grades Field Validation",
        "body > app-root > app-admin-dashboard > div > div > div:nth-child(1) > post-students-form > form > div > div.ml-1.ng-pristine.ng-invalid.ng-touched > div:nth-child(1) > div",
        "studentsGrades Grades Required"
    ],
    SubmitBtn: [
        "Submit Btn",
        "body > app-root > app-admin-dashboard > div > div > div:nth-child(1) > post-students-form > form > button"
    ],
}

export { createNewUserS }