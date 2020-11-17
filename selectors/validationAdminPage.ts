const selectors = {
    GoogleURL: [
        "Google URL",
        "http://localhost:4200/"
    ],
    UserName: [
        "User Name",
        "#Name",
        "admin"
    ],
    ValidationUserName: [
        "UserName Validation",
        "body > app-root > login-parent-dashboard > div > login-admin-child > div > form > div > div:nth-child(1) > div:nth-child(3) > div",
        "Admin Name Is Required"
    ],
    ValidationPassword: [
        "Password Validation",
        "body > app-root > login-parent-dashboard > div > login-admin-child > div > form > div > div:nth-child(2) > div:nth-child(3) > div",
        "Admin Password Is Required"
    ]
}

export { selectors }