// Data Types
// string datatype
var author = "Aung Myat Moe";
var age = 17; // number => float,octtpe,binary,big,hex
var isSingle = true; // boolean
var paragraph = "I'm " + author + " and live in Myanmar.\nI'm Physics student who love programming language.\n";
console.log(paragraph);
// array
var list = [1, 2, 3, 4, 5];
console.log(list);
// generic array type
var glist = [6, 7, 8, 9, 10];
glist[0] = 17;
console.log(glist[0]);
// tuple type
var x;
x = ["Hello World", 17];
x[0].toLowerCase();
console.log(x);
//enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Blue"] = 4] = "Blue";
})(Colors || (Colors = {}));
;
var colorName = Colors[2];
console.log(colorName);
// unknown type
var notSure = 4;
notSure = "maybe a string instead";
