export function passwordValidation(rule, value) {

    var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/g;

    if (regex.test(value))
        return Promise.resolve();

    return Promise.reject("'password' must contain at leat one digit, special character and one upper case letter");
}