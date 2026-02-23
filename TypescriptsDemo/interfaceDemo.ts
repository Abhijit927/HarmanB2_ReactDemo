export interface Ifly{
 fly(): void;
 flightDistance:number; 
}


 export class Bird implements Ifly{
    public flightDistance: number = 100;
    public fly(): void {
        console.log(`Bird is flying with a distance of ${this.flightDistance} Km.`);
    }    
}

export class Airplane implements Ifly{
    public flightDistance :number =1000;
    public  fly(): void {
     console.log(`Airplane is flying with a distance of ${this.flightDistance} KM`);
    }

}

   export class SuperHero implements Ifly{
    public flightDistance = 500;
    public fly():void{
        console.log(`Superhero is flying with a distance of ${this.flightDistance} KM `);
    }
}


export let crow = new Bird();
export let boeing = new Airplane();
export let superman = new SuperHero();

crow.fly();
boeing.fly();
superman.fly();
