"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDivEmlement = CreateDivEmlement;
function CreateDivEmlement(name) {
    return "<div> ".concat(name, "</div>");
}
console.log(CreateDivEmlement("TypeScript Demo."));
