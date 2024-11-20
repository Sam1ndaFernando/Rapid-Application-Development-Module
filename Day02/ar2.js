var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Person = /** @class */ (function () {
    function Person() {
        var ar1 = ["1", "2"];
        var ar2 = ["c", "d", "e"];
        var ar3 = __spreadArray(__spreadArray([], ar1, true), ar2, true);
        console.log.apply(console, ar2);
        console.log(ar3);
        this.person = {
            firstname: "John",
            lastname: "Doe",
            age: 30,
            hobbies: {
                sports: "swimming"
            }
        };
    }
    return Person;
}());
var john = new Person();
var _a = john.person, firstname = _a.firstname, age = _a.age, hobbies = _a.hobbies;
var sports = hobbies.sports;
console.log(firstname);
console.log(age);
console.log(sports);
