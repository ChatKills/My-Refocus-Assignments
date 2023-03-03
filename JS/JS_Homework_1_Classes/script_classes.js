/* 
    todo: Create several animal classes
    @class : animal
*/

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    greet() {
        console.log(`${this.sound}! I am a ${this.name}.`);
    }
    eat() {
        console.log(`${this.name.charAt(0).toUpperCase() + this.name.slice(1)} is currently eating...`);
    }
}

const cat = new Animal("cat", "Meow");
const dog = new Animal ("dog", "Arf");
const bird = new Animal("bird", "Tweet");
const tiger = new Animal("tiger", "Rawr");
cat.greet();
dog.greet();
bird.greet();
tiger.greet();
cat.eat();
dog.eat();
bird.eat();
tiger.eat();