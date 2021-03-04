"use strict";
exports.__esModule = true;
var Interfaces_1 = require("./Interfaces");
console.log('Hello world');
var isOpen = false;
var myName = "Sugi";
var myAge = 26;
var list = [0, 1, 2];
var me = ["sugi", 26, false];
var Job;
(function (Job) {
    Job[Job["WenDev"] = 0] = "WenDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
;
var job = Job.WenDev;
var phone = 'Pixel';
var tablet = 3;
// Function in typescript
var sayHello = function (word) {
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
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
function sayHello2(word) {
    if (word === void 0) { word = "hello"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
}
sayHello("Hello", 'Bell');
sayHello2('heheh', 3, 5);
var newName = "Sugi";
newName = 'belle';
newName = 10;
newName = 10;
console.log(newName);
// Union Types with /
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin(false);
// Null Types
var dog = "Sammy";
dog = null;
console.log('dog', dog);
dog = "Lucie";
dog = undefined;
// Interfaces
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: "sugi", age: "26" });
sayName({ age: "26" });
sayName({ name: "sugi" });
// Enums
//Numeric Enum
var createContent = function (contentType) {
};
createContent(Interfaces_1.Type.Quiz);
console.log(Interfaces_1.Type.Quiz);
// String Enum
var createContent2 = function (contentType) { };
createContent2(Interfaces_1.Type2.Quiz);
console.log(Interfaces_1.Type2.Quiz);
//Object oriented programming
// Classes
var Team = /** @class */ (function () {
    //   public  teamName: string; same as the above
    //  private teamName: string; prevent outside usage
    //   readonly teamName: string; Prevent from being changed
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
