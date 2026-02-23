interface Ifly{
 fly(): void;
 flightDistance:number; 
}


 class Bird implements Ifly{
    public flightDistance: number = 100;
    public fly(): void {
        console.log(`Bird is flying with a distance of ${this.flightDistance} Km.`);
    }    
}

class Airplane implements Ifly{
    public flightDistance :number =1000;
    public  fly(): void {
     console.log(`Airplane is flying with a distance of ${this.flightDistance} KM`);
    }

}

class SuperHero implements Ifly{
    public flightDistance = 500;
    public fly():void{
        console.log(`Superhero is flying with a distance of ${this.flightDistance} KM `);
    }
}


let crow = new Bird();
let boeing = new Airplane();
let superman = new SuperHero();

crow.fly();
boeing.fly();
superman.fly();
