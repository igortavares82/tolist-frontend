export function passwordValidation(rule, value) {

    var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/g;

    if (regex.test(value))
        return Promise.resolve();

    return Promise.reject("'password' must contain at leat one digit, special character and one upper case letter");
}

export function passworEquality(form) {

    let value1 = form.getFieldValue("password");
    let value2 = form.getFieldValue("password-confirmation");

    if (!value1 || value1 == value2)
        return Promise.resolve();

    return Promise.reject("'password confirmation' must be equal to 'password'");
}