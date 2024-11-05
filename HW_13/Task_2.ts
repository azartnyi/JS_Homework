// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {

    if (password.length < 8) {
        return false;
    }

    if (password.trim().length === 0) {
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        }
        else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
        if (hasUpperCase && hasLowerCase && hasDigit) return true;
    }
    return false
}

console.log(validatePassword("Password1"));

console.log(validatePassword("password"));  
console.log(validatePassword("PASSWORD1")); 
console.log(validatePassword("Pass1"));     
console.log(validatePassword("        "));  