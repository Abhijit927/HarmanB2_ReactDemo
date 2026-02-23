var Bird = /** @class */ (function () {
    function Bird() {
        this.flightDistance = 100;
    }
    Bird.prototype.fly = function () {
        console.log("Bird is flying with a distance of ".concat(this.flightDistance, " Km."));
    };
    return Bird;
}());
var Airplane = /** @class */ (function () {
    function Airplane() {
        this.flightDistance = 1000;
    }
    Airplane.prototype.fly = function () {
        console.log("Airplane is flying with a distance of ".concat(this.flightDistance, " KM"));
    };
    return Airplane;
}());
var SuperHero = /** @class */ (function () {
    function SuperHero() {
        this.flightDistance = 500;
    }
    SuperHero.prototype.fly = function () {
        console.log("Superhero is flying with a distance of ".concat(this.flightDistance, " KM "));
    };
    return SuperHero;
}());
var crow = new Bird();
var boeing = new Airplane();
var superman = new SuperHero();
crow.fly();
boeing.fly();
superman.fly();
