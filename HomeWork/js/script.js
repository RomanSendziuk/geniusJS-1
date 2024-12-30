//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// const name = "Ivan";
// const city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// const numA = Number(a);
// console.log(`value: ${numA}; type: ${typeof numA}`);
// const numB = parseInt(b);
// console.log(`value: ${numB}; type: ${typeof numB}`);
// const numC = parseFloat(c);
// console.log(`value: ${numC}; type: ${typeof numC}`);

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// const sum = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(sum);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// const x = Math.max(20, 10, 50, 40);
// console.log(x);

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// const min = 2;
// const max = 4;
// const x = Math.random() * (max - min) + min;
// console.log(x);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами

// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let obj = {};
// obj.name = "Roman";
// obj.age = 99;
// obj.city = "Lviv";
// console.log(obj);
// delete obj.city;
// console.log(obj);
// obj["like flowers"] = true;
// console.log(obj);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (const key in obj) {
//   console.log(`key: ${key}; value: ${obj[key]}`);
// }
