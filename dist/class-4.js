"use strict";
// 4. 제네릭
// Array 제네릭
let numbers = [1, 2, 3, 4, 5];
let strings = ["1", "2", "3", "4", "5"];
let div = document.querySelector("#myDiv1");
let button = document.querySelector("#myButton1");
button.click();
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
let entry = {
    key: "age",
    value: 30
};
let entry2 = {
    key: 1,
    value: ['red', 'blue', 'green']
};
// interface strDict {
//     [key: string]: string;
// }
let strObj = {
    name: "Elliot"
};
// interface numDict {
//     [key: string]: number;
// }
let numobj = {
    age: 30
};