// let data = [
//   { name: "Джейн", age: 13, power: 30000 },
//   { name: "Майк", age: 13, power: 1800 },
//   { name: "Дастин", age: 12, power: 1500 },
//   { name: "Лукас", age: 13, power: 1700 },
//   { name: "Уилл", age: 12, power: 1300 },
// ];
// result = "";

// let filterName = data.filter((person) => person.power > 1700);

// filterName.sort((a, b) => b.power - a.power);

// result = filterName.map((person) => person.name).join(", ");
// console.log(result);

// let data = ["a", "б", "в"];

// let result = {};

// data.forEach((char) => {
//   result[char] = char.toUpperCase();
// });

// console.log(result);

// let data = ["A", "B", "C", "A", "A", "B"];

// let result = {};

// data.forEach((elem) => {
//   if (result[elem]) {
//     result[elem]++;
//   } else {
//     result[elem] = 1;
//   }
// });

// console.log(result);

// let users = { Джейн: 13, Майк: 13, Джойс: 41, Джим: 42 };
// let result = "";
// let yungAge = Infinity;

// for (let max in users) {
//   if (users[max] < yungAge) {
//     yungAge = users[max];
//     result = max;
//   }
// }
// console.log(result);

// let data = { a: "A", b: "B", c: "C" };
// let result = {};

// for (let key in data) {
//   let value = data[key];
//   result[value] = key;
// }

// console.log(result);

// let values = ["Строка", true, "Число", "Объект", "Не число", false];

// for (let v = 0; v < values.length; v++) {
//   if (typeof values[v] === "boolean") {
//     values[v] = `Булевое значение`;
//     break;
//   }
// }
// console.log(values);

let partNumbers = ["ER1234COM", "FIV987451RU", "GE123JO", "P4321NO"];
let newMus = [];

partNumbers.filter((elem) => {
  if (elem.slice(-1, 1) === "string" && elem.slice(-3, 3) === "number") {
    newMus.concat(elem);
  }
});
console.log(newMus);
