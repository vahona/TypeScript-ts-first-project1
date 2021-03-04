


console.log('Hello world');

const isOpen : boolean = false;

const myName : string = "Sugi";

const myAge: number = 26;

const list : number[] = [0, 1, 2]

const me: [string, number,boolean] = ["sugi", 26, false];

enum Job {WenDev, WebDesigner, PM};

const job: Job = Job.WenDev;
const phone : any = 'Pixel';
const tablet: any = 3;

// Function in typescript

const sayHello = (word: 'Hello', ...otherStuff: string[]): string => {
    console.log(otherStuff);
    return word
}

// ? for optional params

// function sayHello2(word?: string): string {
//     console.log(word);
//     return word || 'hello'
// }

// function sayHello2(word = "hello", ...otherStuff): string {
//     console.log(otherStuff);
    
//     return word 
// }

// sayHello('Sugi')
// sayHello2('heheh', "kkk", "sugi")


function sayHello2(word = "hello", ...otherStuff: number[]): string {
    console.log(otherStuff);
    
    return word 
}

sayHello("Hello", 'Bell')
sayHello2('heheh', 3, 5)


let newName : string | number | boolean = "Sugi"
newName = 'belle'
newName = 10
newName = 10

console.log(newName);

// Union Types with /

const makeMargin = (x: string | number): string => {
      return `margin: ${x}px`
}

makeMargin(10);
makeMargin(false)

// Null Types

let dog: string | undefined = "Sammy"

dog = null

console.log('dog', dog);

dog = "Lucie"
dog = undefined


// Interfaces

interface Person {
    name: string;
    age?: string; //? Optional param
}



const sayName = ({name, age}: Person): string => {
    console.log(name);

    return name
    
}


sayName({name: "sugi", age: "26"})
sayName({ age: "26"})
sayName({name: "sugi"})


// Enums

//Numeric Enum

enum Type {
    Video, //0
    BlogPost, //1
    Quiz //2
}

const createContent = (contentType: Type) => {

}



createContent(Type.Quiz)

console.log(Type.Quiz);


// String Enum

enum Type2 {
    Video = 'VIDEO',
    BlogPost = 'BLOG_POST',
    Quiz = 'QUIZ'
}

const createContent2 = (contentType: Type2) => {}

createContent2(Type2.Quiz)

console.log(Type2.Quiz);