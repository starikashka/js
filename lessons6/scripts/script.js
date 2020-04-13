// // - создать массив с 20 числами.
// //let numbersArray = [3, 5, 78, 20, 45, 65, 51, 8, 100, 15, 87, 91, 4, 37, 63, 72, 9, 37, 60, 30];
// let numbersArray= [];
// for (let i = 0; i < 20; i++) {
//     numbersArray.push(Math.floor(Math.random() * 200));
// }
// console.log(numbersArray);
// document.write(numbersArray);
// document.write("<br>");
//
// // -- при помощи метода sort отсортировать массив.
// numbersArray.sort();
// console.log(numbersArray);
// document.write("<br> метод sort <br>");
// document.write(numbersArray);
// numbersArray.sort((a,b) => a - b);
// console.log(numbersArray);
// document.write("<br> метод sort  по зростанню<br>");
// document.write(numbersArray);
// document.write("<br>");
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// numbersArray.sort((a,b) => b - a)
// console.log(numbersArray);
//
// document.write("<br> метод sort сортування по спаданню<br>");
// document.write(numbersArray);
// document.write("<br>");
//
// // -- при помощи filter получить числа кратные 3
// let numbersDiv3 = numbersArray.filter((a) => !(a % 3))
// console.log(numbersDiv3);
// document.write("<br> метод filter числа кратні 3<br>");
// document.write(numbersDiv3);
// document.write("<br>");
//
// // -- при помощи filter получить числа кратные 10
// let numbersDiv10 = numbersArray.filter((a) => !(a % 10));
//
// console.log(numbersDiv10);
// document.write("<br> метод filter числа кратні 10<br>");
// document.write(numbersDiv10);
// document.write("<br>");
//
// // -- перебрать (проитерировать) массив при помощи foreach()
// document.write("<br> перебрать (проитерировать) массив при помощи foreach() <br>");
// numbersArray.forEach((num) =>{
//     console.log(num);
//     document.write(num);
//     document.write("<br>");
// })
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// document.write("<br> перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше <br>");
// let numbers1 = numbersArray.map(num => num * 3)
// console.log(numbers1);
// document.write(numbers1);
// document.write("<br>");

// // - создать массив со словами на 15-20 элементов.
// let arrayStrins = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "accusamus", "aspernatur", "cum", "dolorem", "doloribus", "eius", "facilis", "ipsam", "itaque", "iure", "libero", "natus"];
// console.log(arrayStrins);
// document.write(arrayStrins);
// document.write("<br>");
//
// // -- отсортировать его по алфавиту в восходящем порядке.
// document.write("<br> отсортировать массив по алфавиту в восходящем порядке. <br>");
// arrayStrins.sort();
//
// console.log(arrayStrins);
// document.write(arrayStrins);
// document.write("<br>");
//
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// document.write("<br> отсортировать массив по алфавиту  в нисходящем порядке. <br>");
// arrayStrins.sort().reverse();
//
// console.log(arrayStrins);
// document.write(arrayStrins);
// document.write("<br>");
//
// // -- отфильтровать слова длиной менее 4х символов
// document.write("<br> отфильтровать слова длиной менее 4х символов <br>");
// let newArraySt = arrayStrins.filter((string) => string.length<4);
//
// console.log(newArraySt);
// document.write(newArraySt);
// document.write("<br>");
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// document.write("<br> перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком \"!\" в конце <br>");
// let newArraySt1 = arrayStrins.map(string => string += "!");
//
// console.log(newArraySt1);
// document.write(newArraySt1);
// document.write("<br>");
//

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => a.age - b.age);
// console.table(users);
//
// users.sort((a, b) => b.age - a.age);
// console.table(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length);
// console.table(users);
//
// users.sort((a, b) => b.name.length - a.name.length);
// console.table(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let newUsers = users.map((element, index) => {
//     element.id = index + 1;
//     return element;
// });
// console.table(newUsers);
//
// newUsers.sort((a, b) => b.id - a.id);  /* сортування id від найбільшого до найменшого*/
// console.table(newUsers);

//
//
// // -- наисать функцию калькулятора с 2мя числами и колбеком
// function calcTwoNub(a, b, callback) {
//     return callback(a, b);
// }
//
// console.log(calcTwoNub(5, 2, (a,b)=>a*b));
// console.log(calcTwoNub(5, 2, (a,b)=>a-b));
//
// // -- наисать функцию калькулятора с 3мя числами и колбеком
//
// let calcThreeNumb = (a, b, c, callback) => {return callback(a, b, c)};
//
// console.log(calcThreeNumb(5, 2, 7, (a, b, c) => a + b - c));
// console.log(calcThreeNumb(5, 2, 7, (a, b, c) => a * b - c));
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// console.table(cars.filter(car => car.volume > 3));
//
// // - двигун = 2л
// console.table(cars.filter(car => car.volume == 2));
//
// // - виробник мерс
// console.table(cars.filter(car => car.producer == "mercedes"));
//
// // - двигун більше 3х літрів + виробник мерседес
// console.table(cars.filter(car => (car.volume >= 3 && car.producer == "mercedes")));
//
// // - двигун більше 3х літрів + виробник субару
// console.table(cars.filter(car => (car.volume >= 3 && car.producer == "subaru")));
//
// // - сили більше ніж 300
// console.table(cars.filter(car => car.power > 300));
//
// // - сили більше ніж 300 + виробник субару
// console.table(cars.filter(car => (car.power > 300 && car.producer == "subaru")));
//
// // - мотор серіі ej
// console.table(cars.filter(car => car.engine.startsWith('ej')));
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.table(cars.filter(car => (car.power > 300 && car.producer == "subaru" && car.engine.startsWith('ej'))));
//
// // - двигун меньше 3х літрів + виробник мерседес
// console.table(cars.filter(car => ( car.volume < 3 && car.producer == "mercedes" )));
//
// // - двигун більше 2л + сили більше 250
// console.table(cars.filter(car => ( car.volume > 2 && car.power > 250 )));
//
// // - сили більше 250  + виробник бмв
// console.table(cars.filter(car => ( car.power > 250 && car.producer == "bmw")));

//
//
//
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// console.table(usersWithAddress.sort((a,b) => a.id - b.id));
//
// // -- отсортировать его по id пользователей в обратном опрядке
// console.table(usersWithAddress.sort((a,b) => b.id - a.id));
//
// // -- отсортировать его по возрасту пользователей
// console.table(usersWithAddress.sort((a,b) => a.age - b.age));
//
// // -- отсортировать его по возрасту пользователей в обратном порядке
// console.table(usersWithAddress.sort((a,b) => b.age - a.age));

// // -- отсортировать его по имени пользователей
// console.table(usersWithAddress.sort((a,b) => a.name > b.name ? 1: -1));
//
// // -- отсортировать его по имени пользователей в обратном порядке
// console.table(usersWithAddress.sort((a,b) => a.name < b.name ? 1: -1));

// // -- отсортировать его по названию улицы  в алфавитном порядке
// console.log(usersWithAddress.sort((a,b) => a.address.street > b.address.street ? 1: -1));
//
// // -- отсортировать его по номеру дома по возрастанию
// console.log(usersWithAddress.sort((a,b) => a.address.number - b.address.number));

// // -- отфильтровать (оставить) тех кто младше 30
// console.table(usersWithAddress.filter((user) => user.age < 30));
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// console.table(usersWithAddress.filter((user) => !user.status));
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// console.table(usersWithAddress.filter((user) => !user.status && user.age < 30));
//
// // -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter((user) => !(user.address.number%2)));
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
//
// function Car (model, power, price, year, driver){
//     this.model = model;
//     this.power = power;
//     this.price = price;
//     this.year = year;
//     this.driver = {name: driver.name, age: driver.age, experience: driver.experience}
// }
//
//
// //     Створити не менше 7 та не більше 20 машинок.
// let car1 = new Car ("wrx", 420, 15000, 2010, {name: 'vasya', age: 31, experience: 1});
// let car2 = new Car ( "legacy", 250, 17000,2007, {name: 'petya', age: 26, experience: 4});
// let car3 = new Car ("tribeca", 300, 25000, 2011, {name: 'kolya', age: 37, experience: 10});
// let car4 = new Car ("leone", 140, 5000, 1998, {name: 'olya', age: 25, experience: 7});
// let car5 = new Car ("impreza", 200, 27500, 2014, {name: 'max', age: 60, experience: 2});
// let car6 = new Car ("outback", 235, 33000, 2014, {name: 'anya', age: 75, experience: 6});
// let car7 = new Car ("115", 220, 11000, 2002, {name: 'oleg', age: 23, experience: 5});
// let car8 = new Car ("315", 130, 5400, 2007, {name: 'andrey', age: 19, experience: 3});
// let car9 = new Car ("650", 350, 45000, 2009, {name: 'masha', age: 30, experience: 10});
// let car10 = new Car ("320", 190, 12300, 2012, {name: 'olya', age: 47, experience: 11});
// let car11 = new Car ("e63", 400, 52000,2017, {name: 'max', age: 21, experience: 1});
// let car12 = new Car ("c250", 320, 8400,2008, {name: 'max', age: 51, experience: 3});
//
//
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// car1.power += Math.round(car1.power*0.1);
// car3.power += Math.round(car3.power*0.1);
// car4.power += Math.round(car4.power*0.1);
// car6.power += Math.round(car6.power*0.1);
// car7.power += Math.round(car7.power*0.1);
// car12.power += Math.round(car12.power*0.1);
//
//
//
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// car1.driver = {name: 'Jane', age: 51, experience: 15};
// car3.driver = {name: 'Bruce', age: 37, experience: 5};
// car4.driver = {name: 'Carl', age: 51, experience: 8};
// car6.driver = {name: 'Karen', age: 57, experience: 25};
// car7.driver = {name: 'Dexter', age: 34, experience: 12};
// car12.driver = {name: 'Elizabeth', age: 27, experience: 7};
//
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12];
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Car.prototype.powerUp = function (){
//     this.power += Math.round(this.power*0.1);
//     this.price += Math.round(this.price*0.05);
// };
// console.table(cars);
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].powerUp();
// }
// console.table(cars);
//
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = 0;
// cars.forEach((car) => {
//     if(car.driver.experience < 5 && car.driver.age < 25){
//         //console.table(car);
//         car.driver.experience ++;
//         //console.table(car);
//     }
//     sum += car.price;
// });
// console.log(sum);

//
//
// // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// //     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// //     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// //
// // Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
//
// function indexFinder(array, key){
//     let resultArr = [];
//     array.findIndex((value, index) => {
//         if(value === key){
//             resultArr.push(index);
//         }
//     });
//     if(resultArr.length) {
//         console.log(`MinIndex = ${resultArr[0]}, MaxIndex = ${resultArr[resultArr.length - 1]}`);
//     }else{
//         console.log("Index was not found");
//     }
// };
//
// indexFinder(Arr, 1);
// indexFinder(Arr, 4);
// indexFinder(Arr, 5);



// сделать функцию которая принимает число... после чего, каждую цифру этого числа нужно добавить между собой...
// и так повторять пока сумма чисел не будет равна одной цифре

function digitsSum(number) {
    let result = number.toString().split('').reduce((a,b) => Number(a) + Number(b));
    console.log(result);
    if (result>10){
        return digitsSum(result);
    }else{
        return result;
    }
};
console.log("sum = " + digitsSum(16));
console.log("---------------------");
console.log("sum = " + digitsSum(942));
console.log("---------------------");
console.log("sum = " + digitsSum(132189));
console.log("---------------------");
console.log("sum = " + digitsSum(493193));
