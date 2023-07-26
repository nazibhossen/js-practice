class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPlayerDetails () {
        return `${this.name} is ${this.age} years old`;
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
}

const player = new Footballer('Messi', 35, 400);
console.log(player.getPlayerDetails())