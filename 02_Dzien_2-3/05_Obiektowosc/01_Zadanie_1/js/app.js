class Duck {
    constructor() {
        this.type = "Zwykła kaczka";
    }
    quack() {
        console.log('kwa kwa');
    }
    swim() {
        console.log('płynę...');
    }
    print() {
        console.log(`Wygląda jak ${this.type}`);
    }
    fly() {
        console.log(`${this.type} leci.`)
    }
}
const duck = new Duck();

duck.swim();
duck.quack();
duck.print();
duck.fly();

console.log(' # zadanie 2');

// zadanie 2

class WildDuck extends Duck {
    constructor() {
        super();
        this.type = "Dzika kaczka";
    }
}
const wildDuck = new WildDuck();

wildDuck.print();
wildDuck.swim();
wildDuck.quack();
wildDuck.fly();