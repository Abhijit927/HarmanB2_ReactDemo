export class employee {

    public empid : number;
    public empname:string;
    protected CTC :number;
    private password:string;
    protected username:string;
    public static swipes:number=0;
    public  otherInformation : any[] =[];

    public swipe(){
        employee.swipes++;
        console.log(`${this.empname} swipped in. Total swipes: ${employee.swipes}`);
    }

    constructor(empid:number,empname:string,CTC:number,password:string,username:string, ...info:any[]){
        this.empid=empid;
        this.empname=empname;
        this.CTC =CTC;
        this.password=password;
        this.username=username;
        this.otherInformation.push(info);
    }
}

//call class
let empMeena = new employee(1,"Meena",50000,"Meena@123","meeena@123","Dpartment:IT","Location:chainai");
let empRavi = new employee(2,"Ravi",60000,"Ravi@123","ravi@123","Dpartment:HR","Location:Delhi");

empMeena.swipe();
empMeena.swipe();
empMeena.swipe();
empRavi.swipe();
// console.log(employee.swipes);
console.log(empMeena);
console.log(empRavi);
// console.log(employee.swipes);
