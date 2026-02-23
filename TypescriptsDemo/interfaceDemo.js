"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superman = exports.boeing = exports.crow = exports.SuperHero = exports.Airplane = exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
        this.flightDistance = 100;
    }
    Bird.prototype.fly = function () {
        console.log("Bird is flying with a distance of ".concat(this.flightDistance, " Km."));
    };
    return Bird;
}());
exports.Bird = Bird;
var Airplane = /** @class */ (function () {
    function Airplane() {
        this.flightDistance = 1000;
    }
    Airplane.prototype.fly = function () {
        console.log("Airplane is flying with a distance of ".concat(this.flightDistance, " KM"));
    };
    return Airplane;
}());
exports.Airplane = Airplane;
var SuperHero = /** @class */ (function () {
    function SuperHero() {
        this.flightDistance = 500;
    }
    SuperHero.prototype.fly = function () {
        console.log("Superhero is flying with a distance of ".concat(this.flightDistance, " KM "));
    };
    return SuperHero;
}());
exports.SuperHero = SuperHero;
exports.crow = new Bird();
exports.boeing = new Airplane();
exports.superman = new SuperHero();
exports.crow.fly();
exports.boeing.fly();
exports.superman.fly();
