console.log("hello world");
let message = "Hii bro";
console.log(message);


function add(a:number,b:number):number{
    return a + b;
}
const result = add(5,10);
console.log(result);


interface Registrations{
    name: string;
    age : number;
    location:string;
}

const form: Registrations = {
    name:"Uday",
    age:22,
    location:"Vijayawada"
};

console.log(form);


class Animal {
    constructor(public name:string){}
        makesound(): void{
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    makesound(): void{
    console.log(`${this.name}Barks`)
    }
}

const animal = new Animal("cat");
animal.makesound();
const dog = new Dog("Rocky");
dog.makesound();


function iden<U>(arg: U):U {
    return arg;
}

const num = iden<number>(22);
const str = iden<string>("Uday");

console.log(num);
console.log(str);

enum Direction {
    up,
    down,
    left,
    right
}

const move = Direction.up;
console.log(move);

console.log(Direction[move]);
console.log(Direction[3]);


enum Directional {
    up = 1,
    Down,
    left= 50,
    right
}

console.log(Directional.up);
console.log(Directional.Down);
console.log(Directional.left);
console.log(Directional.right);