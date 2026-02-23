"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexObject = exports.add = exports.greet = exports.address = exports.hobbies = exports.isEmployed = exports.ang = exports.personName = void 0;
exports.doingTask = doingTask;
exports.personName = "John Doe";
exports.ang = 40;
exports.isEmployed = true;
exports.hobbies = ["Reading", "gaming", "hocking"];
exports.address = { street: "123 Main st", city: "Anytown", country: "USA" };
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
exports.greet = greet;
function doingTask(task) {
    return "I am doing Task: ".concat(task);
}
var add = function (x, y) { return x + y; };
exports.add = add;
console.log(exports.personName);
console.log(exports.ang);
console.log(exports.isEmployed);
console.log(exports.hobbies);
console.log(exports.address);
console.log((0, exports.greet)(exports.personName));
console.log(doingTask("TypeScript"));
console.log((0, exports.add)(5, 10));
exports.complexObject = {
    Id: 1,
    Roles: ["Devveloper", "Admin"],
    Details: {
        projectName: "TypeScript Demo",
        isActive: true,
        Modules: { Submodule: { names: ["Syntaxes", "Functions", "classes"] } }
    }
};
console.log(exports.complexObject);
console.log(exports.complexObject.Id);
console.log(exports.complexObject.Roles[1]);
console.log(exports.complexObject.Details.projectName);
console.log(exports.complexObject.Details.Modules.Submodule.names[2]);
console.log(" complexObject's project Details: ".concat(exports.complexObject.Id, ", Roles: ").concat(exports.complexObject.Roles.join(","), "\nProjectName : ").concat(exports.complexObject.Details.projectName, ",IS active : ").concat(exports.complexObject.Details.isActive, ",\nSubmodules Names : ").concat(exports.complexObject.Details.Modules.Submodule.names.join(",")));
