class Player {
    #name;  // Private Property
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    getName(){
        return this.#name
    }

    getAge(){
        return this.#age
    }

    getPlayerDetails () {
        return `${this.#name} is ${this.#age} years old`;
    }
}

class Footballer extends Player {
    constructor(name, age, noOfGoals) {
        super(name, age);
        this.noOfGoals = noOfGoals;
    }

}

class Cricketer extends Player {
    constructor(name, age, centuries){
        super(name, age);
        this.centuries = centuries;
    }
    getPlayerDetails () {
        return `${this.getName()} এর বয়স  ${this.getAge()} বছর`;
    }
}

const messi = new Footballer('Messi', 35, 400);
const sakib = new Cricketer('Sakib', 36, 15);
console.log(sakib.getPlayerDetails())