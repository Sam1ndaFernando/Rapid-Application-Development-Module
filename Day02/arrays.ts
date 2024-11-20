// // #type is array,but never assign any value to it
// let ar =[];

// let ar1 =["a","b","c","d","e","f","g",];
// console.log(ar1);

// let ar2 =[1,2,3,4,5,6,7,8,9];
// console.log(ar2);

// let ar3 =[true,false,true,false,true,false,true,false,true];
// console.log(ar3);

// let ar4 =[1,"Saminda",1,2,3,4,5,true];
// console.log(ar4);

// let ar5 =Array<string>();

// let ar6 :string[]


// function printArray(ar : number[]) {
//     ar.forEach((e)=> console.log(e));

// }
// printArray(ar2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const small = 1;
const medium = 2;
const large = 3;

enum Size {
    small = 'a',
    medium = 'b',
    large = 'c'
}

const mySize = Size.large;
console.log(mySize);
console.log(Size.large);
console.log(Size.medium);
console.log(Size.small);
