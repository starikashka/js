// // - створити функцію яка виводить масив
// let array = [1,5,78,6,41]
// function showArray(value) {
//     console.log(value);
//     for (let i = 0; i < value.length; i++) {
//         document.write(`${value[i]} `);
//
//     }
// }
//showArray(array);
// document.write(`<br>`);
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomArray(array){
//     let max = 11;
//     let min = 5;
//     let length = Math.floor(Math.random() * (max - min)) + min+1;
//
//     min = 0;
//     for (let i = 0; i < length ; i++) {
//         array[i] =  Math.floor(Math.random() * (max - min)) + min;
//     }
// }
// let array1 = [];
// randomArray(array1)
// showArray(array1);

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function min(a, b, c){
//     if(a > b){
//         a = b;
//     }
//     if( a > c){
//         console.log(c);
//         return c;
//     }else{
//         console.log(a);
//         return a;
//     }
// }
// console.log(min(10,2,5));
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a, b, c){
//     if(a > b){
//         a = b;
//     }
//     if( a < c){
//         console.log(c);
//         return c;
//     }else{
//         console.log(a);
//         return a;
//     }
// }
// console.log(min(1,2,3));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMax(){
//     let min;
//     let max;
//     min = max = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if(arguments[i] < min){
//             min = arguments[i];
//         } else
//             if(arguments[i] > max){
//                 max = arguments[i];
//             }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(8,2,3,10,1,5));

// - створити функцію яка виводить масив
// // - створити функцію яка повертає найбільше число з масиву
// function maxInArray(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if(array[i] > max){
//                 max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maxInArray([8,2,3,10,1,5]));
//
// // - створити функцію яка повертає найменьше число з масиву
// function minInArray(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if(array[i] < min){
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(minInArray([8,2,3,10,1,5]));

// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(sumArray([8,2,3,10,1,5]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum/array.length;
// }
// console.log(averageArray([8,2,3,10,1,5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function countObjectsInArray(array) {
//     return array.length;
// }
// console.log( countObjectsInArray([{a:1},{a:2}]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function countObjectsFilodInArray(array) {
//     let count = 0;
//     for (const argument in array) {
//         if( typeof array[argument] === "object"){
//             count++;
//             count+= countObjectsFilodInArray(array[argument]);
//         }else{
//             count++
//         }
//     }
//     return count;
// }
// console.log( countObjectsFilodInArray([{a1:5,a2:2,a3:{b1:1,b2:2}},{a4:{b3:{c1:{d1:1, d2:2},c2:0}}, b4:1}]));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function addIdenticalID(array1, array2) {
//     let resultArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         resultArray[i] = array1[i] + array2[i];
//     }
//     return resultArray;
// }
// console.log(addIdenticalID([1,2,3,4], [4,3,2,1]));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function replaceObj(array, index) {
//     let element = array[index];
//     array[index] = array[index+1];
//     array[index+1] = element;
// }
// let arr = [{a:1},{a:2},{a:3},{a:4}];
// replaceObj(arr, 2)
// console.log(arr);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function zeroSort(array) {
//         let length = array.length;
//     for (let i = 0; i < length; i++) {
//         if(!array[i]){
//             array.splice(i, 1);
//             array.push(0);
//             length--;
// 		}
//     }
// }
// let arr = [1,0,6,0,3];
// console.log(arr );
// zeroSort(arr);
// console.log(arr);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function text() {
//     const element = document.createElement("div");
//     document.body.appendChild(element);
//     element.innerText = "Hello owu";
// }
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function printText(htmlElement, text) {
//     const element1 = document.createElement(htmlElement);
//     element1.innerText = text;
//     document.body.appendChild(element1);
//
// }
// printText("span", "!!!");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [
    {model: "Focus", production: 2005, power: 200, color: "black"},
    {model: "Kadett", production: 1992, power: 120, color: "grey"},
    {model: "Calibra", production: 1990, power: 100, color: "red"},
    {model: "Mustang", production: 2005, power: 250, color: "metallic"},
    {model: "Speedster", production: 2001, power: 220, color: "blue"},
    {model: "Vivaro", production: 2015, power: 135, color: "blue"},
    {model: "A7", production: 2010, power: 225, color: "white"},
    {model: "RS 4", production: 2025, power: 203, color: "black"},
    {model: "Golf", production: 2012, power: 90, color: "silver"},
    {model: "Jetta", production: 1980, power: 145, color: "green"}
];

// function cars1(carsList, elementId) {
//     let carsBlock = document.getElementById(elementId);
//     for (const car of carsList) {
//         const element = document.createElement("div");
//         document.body.appendChild(element);
//         element.innerText = `${car.model} ${car.production}  ${car.power}  ${car.color} `;
//         carsBlock.appendChild(element);
//     }
// }
// cars1(cars, "car-list");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function printText(htmlElement, text, elementDOM) {
//     const element = document.createElement(htmlElement);
//     element.innerText = text;
//     elementDOM.appendChild(element)
// }
//
// function carsPrint(carslist, elmentId) {
//     let carsBlock = document.getElementById(elmentId);
//     for (const car of carslist) {
//         const element = document.createElement("div");
//         printText("h2", car.model, element);
//         printText("div", car.production, element);
//         printText("div", car.power, element);
//         printText("div", car.color, element);
//         carsBlock.appendChild(element);
//     }
// }
// carsPrint(cars, "car-list");
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//              let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
// function arrayConcatenate(array1, array2) {
//     for(let user of array1){
//         for(let city of array2){
//             if(user.id === city.user_id){
//                 user.address = city
//             }
//         }
//     }
//     return array1;
// }
// console.log(arrayConcatenate(usersWithId,citiesWithId));
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
// "
// <h1></h1>
// <div id="wrap"></>

function rulePrint(title, body, elementDOM) {
    const elementTitle = document.createElement("h2");
    elementTitle.innerText = title;
    elementDOM.appendChild(elementTitle);
    const elementBody = document.createElement("p");
    elementBody.innerText = body;
    elementDOM.appendChild(elementBody);
}

const elementTitle = document.createElement("h1");
elementTitle.innerText = "Правила бойцовского клуба";
document.body.appendChild(elementTitle);

const elementWrap = document.createElement("div");
elementWrap.id = "wrap";

for (let i = 0; i < rules.length; i++) {
    const div = document.createElement("div");
    div.classList = `rules rule${i+1}`;
    rulePrint(rules[i].title, rules[i].body, div);
    elementWrap.appendChild(div);
}
document.body.appendChild(elementWrap);