export let personName:string ="John Doe";
export let ang:number = 40;
export let isEmployed:boolean =true;
export let hobbies:string[] =["Reading","gaming","hocking"];
export let address:any={ street:"123 Main st",city:"Anytown",country:"USA"};


export let greet = function(name:string):string{
    return `Hello, ${name}!`;
}


export function doingTask(task:string):string{
    return `I am doing Task: ${task}`;
}

export let add = (x:number,y:number):number => x+y ;



console.log(personName);
console.log(ang);
console.log(isEmployed);
console.log(hobbies);
console.log(address);
console.log(greet(personName));
console.log(doingTask("TypeScript"));
console.log(add(5, 10));    


export let complexObject ={
    Id:1,
    Roles:["Devveloper","Admin"],
    Details:{
        projectName:"TypeScript Demo",
        isActive:true,
        Modules:{Submodule :{ names:["Syntaxes","Functions","classes"]}}}
    }


    console.log(complexObject);
    console.log(complexObject.Id);
    console.log(complexObject.Roles[1]);
    console.log(complexObject.Details.projectName);
    console.log(complexObject.Details.Modules.Submodule.names[2]);
console.log(` complexObject's project Details: ${complexObject.Id}, Roles: ${complexObject.Roles.join(",")}
ProjectName : ${complexObject.Details.projectName},IS active : ${complexObject.Details.isActive},
Submodules Names : ${complexObject.Details.Modules.Submodule.names.join(",")}`);