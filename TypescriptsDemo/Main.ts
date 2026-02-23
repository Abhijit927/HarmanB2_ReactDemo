import {employee} from "./classes";
import {   CreateDivEmlement } from "./tsXml";
import {add,address,complexObject,greet,hobbies,doingTask} from "./syntaxes";



let divElement = CreateDivEmlement("Welcome to TypeScript Demo!");
console.log(divElement);

console.log(greet("TypeScript Learner"));
console.log(doingTask("Learning TypeScript"));
console.log(add(1,5))
console.log(address);
console.log(hobbies);
console.log(complexObject);

let pruthvi = new employee(3,"Pruthvi",70000,"Pruthvi@123","pruthvi@123","Department:Finance","Locations:Banglore");
pruthvi.swipe();
console.log(pruthvi);

