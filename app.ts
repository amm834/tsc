// Data Types

// string datatype
let author: string = "Aung Myat Moe";

let age: number = 17; // number => float,octtpe,binary,big,hex

let isSingle: boolean = true; // boolean

let paragraph: string = `I'm ${author} and live in Myanmar.
I'm Physics student who love programming language.
`;

console.log(paragraph);

// array
let list: number[] = [1, 2, 3, 4, 5];
console.log(list);

// generic array type
let glist: Array < number > = [6, 7, 8, 9, 10];
glist[0] = 17;
console.log(glist[0]);

// tuple type
let x:[string,number];
x = ["Hello World",17];
x[0].toLowerCase();
console.log(x);

//enums

enum Colors{
Red = 2,
Green,
Blue
};

let colorName:string = Colors[2];
console.log(colorName);

// unknown type
let notSure: unknown = 4;
notSure = "maybe a string instead";

