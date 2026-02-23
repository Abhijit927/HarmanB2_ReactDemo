var name = "John Doe";
var ang = 40;
var isEmployed = true;
var hobbies = ["Reading", "gaming", "hocking"];
var address = { street: "123 Main st", city: "Anytown", country: "USA" };
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
function doingTask(task) {
    return "I am doing Task: ".concat(task);
}
var add = function (x, y) { return x + y; };
console.log(name);
console.log(ang);
console.log(isEmployed);
console.log(hobbies);
console.log(address);
console.log(greet(name));
console.log(doingTask("TypeScript"));
console.log(add(5, 10));
var complexObject = {
    Id: 1,
    Roles: ["Devveloper", "Admin"],
    Details: {
        projectName: "TypeScript Demo",
        isActive: true,
        Modules: { Submodule: { names: ["Syntaxes", "Functions", "classes"] } }
    }
};
console.log(complexObject);
console.log(complexObject.Id);
console.log(complexObject.Roles[1]);
console.log(complexObject.Details.projectName);
console.log(complexObject.Details.Modules.Submodule.names[2]);
console.log(" complexObject's project Details: ".concat(complexObject.Id, ", Roles: ").concat(complexObject.Roles.join(","), "\nProjectName : ").concat(complexObject.Details.projectName, ",IS active : ").concat(complexObject.Details.isActive, ",\nSubmodules Names : ").concat(complexObject.Details.Modules.Submodule.names.join(",")));
