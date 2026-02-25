import React from "react";


interface GreetingsProps{
    name:string;
    age?:number;
    isEmployee:boolean;

}

export const Greetings = ({name,age,isEmployee}:GreetingsProps)=>{

    return(
        <>
        <p>Hello {name}!</p> Welcome to training session. your age is {age} and your employee 
        status is {isEmployee ? "Employee":"Not an Employee"}.
        </>
    )
}