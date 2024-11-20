// #type is array,but never assign any value to it
var ar = [];
var ar1 = ["a", "b", "c", "d", "e", "f", "g",];
console.log(ar1);
var ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ar2);
var ar3 = [true, false, true, false, true, false, true, false, true];
console.log(ar3);
var ar4 = [1, "Saminda", 1, 2, 3, 4, 5, true];
console.log(ar4);
var ar5 = Array();
var ar6;
function printArray(ar) {
    ar.forEach(function (e) { return console.log(e); });
}
printArray(ar2);
