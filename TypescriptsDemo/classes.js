"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee = void 0;
var employee = /** @class */ (function () {
    function employee(empid, empname, CTC, password, username) {
        var info = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            info[_i - 5] = arguments[_i];
        }
        this.otherInformation = [];
        this.empid = empid;
        this.empname = empname;
        this.CTC = CTC;
        this.password = password;
        this.username = username;
        this.otherInformation.push(info);
    }
    employee.prototype.swipe = function () {
        employee.swipes++;
        console.log("".concat(this.empname, " swipped in. Total swipes: ").concat(employee.swipes));
    };
    employee.swipes = 0;
    return employee;
}());
exports.employee = employee;
//call class
var empMeena = new employee(1, "Meena", 50000, "Meena@123", "meeena@123", "Dpartment:IT", "Location:chainai");
var empRavi = new employee(2, "Ravi", 60000, "Ravi@123", "ravi@123", "Dpartment:HR", "Location:Delhi");
empMeena.swipe();
empRavi.swipe();
// console.log(employee.swipes);
console.log(empMeena);
console.log(empRavi);
// console.log(employee.swipes);
