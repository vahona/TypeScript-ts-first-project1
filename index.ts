


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


// let myName = 'Sugi';
// myName = 'bell'
