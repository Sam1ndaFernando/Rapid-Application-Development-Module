let ar1=['1','2','3'];
let ar2=['s'];
console.log(typeof(ar1));
console.log("Hello");

enum Size{
    Small='a',
    Medium='b',
    Large='c'
}

console.log(Size.Small);
console.log(Size.Medium);

function printArray(ar:string[]){
    ar.forEach((e)=>{
        console.log(e);
    });

}



//ar1.push(...ar2);// append copy of ar2 to ar1
//printArray(ar1);
//printArray(ar2);
//printArray(ar2);// meka pass krnn be mokd printArray does not accept another types of data. only string

//const mySize=Size.Large;
//console.log(mySize);
/*type subType=(n1 :number,n2: number) => number;

function substract(n1 :number,n2: number):number{
    return n1-n2;
}


function calculate(n1, n2, subFn:subType){
    const result= subFn(n1,n2);
    return result;

}

console.log(calculate(5,4,substract));
*/

// Objects

/*const person   ={
    firstName:"sawani",
    age:30,
    hobbies:{
        sports:"cricket"
    }
};

console.log(person.hobbies.sports);*/

class Person {
    f_name: string;
    age: number;
    hobbies: { sports: string };

    constructor(f_name: string, age: number, sports: string) {
        this.f_name = f_name;
        this.age = age;
        this.hobbies = { sports };
    }
}

const person1 = new Person("saminda", 22, "cricket");

console.log(person1);  


const { f_name, age, hobbies } = person1;
const { sports } = hobbies;

console.log(hobbies);   
console.log(sports);    



