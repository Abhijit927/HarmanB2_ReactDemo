"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empRavi = exports.empMeena = exports.employee = void 0;
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
exports.empMeena = new employee(1, "Meena", 50000, "Meena@123", "meeena@123", "Dpartment:IT", "Location:chainai");
exports.empRavi = new employee(2, "Ravi", 60000, "Ravi@123", "ravi@123", "Dpartment:HR", "Location:Delhi");
exports.empMeena.swipe();
exports.empMeena.swipe();
exports.empMeena.swipe();
exports.empRavi.swipe();
// console.log(employee.swipes);
console.log(exports.empMeena);
console.log(exports.empRavi);
// console.log(employee.swipes);
