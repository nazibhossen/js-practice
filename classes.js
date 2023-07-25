class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('Walk');
    }
}

const person = new Person('Nazib');

console.log(person)