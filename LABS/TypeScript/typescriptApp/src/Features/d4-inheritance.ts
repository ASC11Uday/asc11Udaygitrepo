//3.classes and inheritance
class Animal{
    constructor(public name:string){}
    makesound():void{
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
        console.log("Dog construter called");
    }
    makesound(): void {
        console.log(`${this.name} Barks.`);
    }
}
//new keyword for create an instance of class.
const animal = new Animal("cat");
animal.makesound();
const dog = new Dog("Rocky");
dog.makesound();