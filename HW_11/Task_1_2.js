//Task 1
// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     console.log(emp1.firstName); // "John"
//     emp1.salary = 3100;
//     console.log(emp1.age); // 3100
// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте).
// 6. Реализуйте геттеры для полей title, phone, и address.
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.
// 8. Проверьте корректную работу:
//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     console.log(company.getEmployees()); // [Employee, Employee]
// 9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
// Компания: 
// Адрес:
// Количество сотрудников:

//Task 2
// 1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден.
// 2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени. 
//    Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
//    Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee
// 3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.

// 4. Добавление валидации для полей сотрудника в сеттеры:
//   Employee:
//     firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
//     profession — строка, не может быть пустой, только латинские буквы и пробелы.
//     salary — число, должно быть больше 0 и меньше 10000.
// 5. Проверьте свой код:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
//     const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     company.addEmployee(emp3);

//     console.log(company.getTotalSalary()); // 12000
//     console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
//     company.removeEmployee("John");
//     console.log(company.getEmployees()); // [Employee, Employee]




class Employee {
    #salary

    constructor (firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary
    }

    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get profession() {
        return this._profession
    }
    get salary() {
        return this.#salary
    }

    set firstName(firstName) {
       this._firstName = firstName;
    }
    set lastName(lastName) {
        return this._lastName = lastName;
    }
    set profession(profession) {
        return this._profession = profession;
    }
    set salary(salary) {
        return this.#salary = salary;
    }

    getFullName() {
        return `${this._firstName} ${this.lastName}`;
    }
    
}

    // const emp1 = new Employee("John", "Doe", "Developer", 3100);
    // console.log(emp1.firstName); // "John"
    // emp1.salary = 3100;
    // console.log(emp1.salary); // 3100

class Company {
    #employees
    
    constructor (title, phone, address, employees = []) {
        this._title = title;
        this._phone = phone;
        this._address = address;
        this.#employees = employees;
    }

    get title() {
    return this._title;
    }
    get phone() {
    return this._phone;
    }
    get address() {
    return this._address;
    }

    addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Объект не находится в классе Employee");
    } 
    this.#employees.push(employee)
    }

    getEmployees() {
    return this.#employees;
    }

    getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
    }

    findEmployeeByName(firstName) {
    return this.#employees.find(employee => employee.firstName === firstName);
    }

    removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index !== -1) { 
        this.#employees.splice(index, 1);
    } else {
        console.log("Сотрудник с таким именем не найден");
    }
    }


    getEmployeeIndex(firstName) {
    return this.#employees.findIndex(employee => employee.firstName === firstName)
    }


    getTotalSalary() {
        return this.#employees.reduce((total, employee) => total + employee.salary, 0);
    }
}

//Проверка Task 1
// const company = new Company("Tech Corp", "123-456", "Main Street");
// const emp1 = new Employee("John", "Doe", "Developer", 3000);
// const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]
// console.log(company.getInfo());

//Проверка Task 2
    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
    const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

    const company = new Company("Tech Corp", "123-456", "Main Street");
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    company.addEmployee(emp3);

    console.log(company.getTotalSalary()); // 12000
    console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
    company.removeEmployee("John");
    console.log(company.getEmployees()); // [Employee, Employee]