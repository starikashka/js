// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let obj1 = {name: "Marko", surname: "Black", age: 125};
let obj2 = {type: "Audi", model: "Q7", color: "black"};
let obj3 = {location: "Lviv", staus: true, key: null};
let obj4 = {fruit: "bannan", energy: 100, lysine: 50};
let obj5 = {work: true, events: "coffee time meeting", location: null};
//
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let obj6 = {
    position: {left: 1, right: 2},
    visibility: true,
    event: null,
    classList: ["block", "container", "colorSilver"]
};
let obj7 = {
    id: 54,
    text: {title: "Design Patterns", subTitle: "Design Patterns: Elements of Reusable Object-Oriented Software "},
    author: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"]
};
let obj8 = {parametrList: ["param1", "param2", "param3"], activObj: {a1: true, a2: true, a3: false, a4: true}};
let obj9 = {
    id: 100054,
    roductsList: [
        {processor: "AMD Ryzen 5 3600 6-Core"},
        {memory: "Corsair CMW32GX4M2C3200C16 Vengeance RGB PRO 32GB (2x16GB) DDR4 3200 (PC4-25600)"},
        {Motherboard: "ASROCK AMD X470"}
    ]
};
let obj10 = {color: 'brown', type: 'quadrate', materail: ['wood', 'plastic'], legs: {type: 'iron'}};
//
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let element in obj1){
//     console.log(element);
// }
// for (let element in obj2){
//     console.log(element);
// }
// for (let element in obj3){
//     console.log(element);
// }
// for (let element in obj4){
//     console.log(element);
// }
// for (let element in obj5){
//     console.log(element);
// }
// for (let element in obj6){
//     console.log(element);
// }
// for (let element in obj7){
//     console.log(element);
// }
// for (let element in obj8){
//     console.log(element);
// }
// for (let element in obj9){
//     console.log(element);
// }
// for (let element in obj10){
//     console.log(element);
// }
//
//
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(obj6));
// console.log(Object.keys(obj7));
// console.log(Object.keys(obj8));
// console.log(Object.keys(obj9));
// console.log(Object.keys(obj10));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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
]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    {name: "Lviv", population: 800000, country: "Ukraine", region: "Lviv"},
    {name: "London", population: 9000000, country: "UK", region: "London"},
    {name: "York", population: 200000, country: "UK", region: "Yorkshire"},
    {name: "Cracow", population: 750000, country: "Poland", region: "Lesser Poland"},
    {name: "Rome", population: 2800000, country: "Italy", region: "Lazio"},
    {name: "Milan", population: 1500000, country: "Italy", region: "Lombardy"},
    {name: "San Francisco", population: 800000, country: "USA", region: "California"},
    {name: "San Jose", population: 1000000, country: "USA", region: "California"},
    {name: "New York City", population: 8100000, country: "USA", region: "New York"},
    {name: "Kyiv", population: 3000000, country: "Ukraine", region: "Kyiv"}
]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let carsList = [
    {model: "Focus", production: 2005, power: 200, color: "black", driver: {name: 'vasya', age: 31, status: false}},
    {model: "Kadett", production: 1992, power: 120, color: "grey", driver: {name: 'petya', age: 30, status: true}},
    {model: "Calibra", production: 1990, power: 100, color: "red", driver: {name: 'kolya', age: 29, status: true}},
    {model: "Mustang", production: 2005, power: 250, color: "metallic", driver: {name: 'olya', age: 28, status: false}},
    {model: "Speedster", production: 2001, power: 220, color: "blue", driver: {name: 'max', age: 30, status: true}},
    {model: "Vivaro", production: 2015, power: 135, color: "blue", driver: {name: 'anya', age: 31, status: false}},
    {model: "A7", production: 2010, power: 225, color: "white", driver: {name: 'oleg', age: 28, status: false}},
    {model: "RS 4", production: 2025, power: 203, color: "black", driver: {name: 'andrey', age: 29, status: true}},
    {model: "Golf", production: 2012, power: 90, color: "silver", driver: {name: 'masha', age: 30, status: true}},
    {model: "Jetta", production: 1980, power: 145, color: "green", driver: {name: 'olya', age: 31, status: false}}
];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let count = 0;
// while (count < cars.length){
//     console.log(cars[count]);
//     count++;
// }
// count = 0;
// while (count < cities.length){
//     console.log(cities[count]);
//     count++;
// }
// count = 0;
// while (count < carsList.length){
//     console.log(carsList[count]);
//     count++;
// }
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < carsList.length; i++) {
//     console.log(carsList[i]);
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(let element of cars){
//     console.log(element);
// }
// for(let element of cities){
//     console.log(element);
// }
// for(let element of carsList){
//     console.log(element);
// }
// - взять объекты из задания 1 и превратить каждый в json.
// let jsonObj1 = JSON.stringify(obj1);
// console.log(jsonObj1);
// let jsonObj2 = JSON.stringify(obj2);
// console.log(jsonObj2);
// let jsonObj3 = JSON.stringify(obj3);
// console.log(jsonObj3);
// let jsonObj4 = JSON.stringify(obj4);
// console.log(jsonObj4);
// let jsonObj5 = JSON.stringify(obj5);
// console.log(jsonObj5);
// // - взять json из задания 11 и превратить их обратно в объекты.
// let cloneObj1 = JSON.parse(jsonObj1);
// console.log(cloneObj1);
// let cloneObj2 = JSON.parse(jsonObj2);
// console.log(cloneObj2);
// let cloneObj3 = JSON.parse(jsonObj3);
// console.log(cloneObj3);
// let cloneObj4 = JSON.parse(jsonObj4);
// console.log(cloneObj4);
// let cloneObj5 = JSON.parse(jsonObj5);
// console.log(cloneObj5);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for(let element of cars){
//     console.log(JSON.stringify(element));
// }
//
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for(let element of cities){
//     console.log(JSON.stringify(element));
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newCarsList = [];
// for (let i = 0; i < carsList.length; i++) {
//     newCarsList.push(JSON.stringify(carsList[i]));
// }
// console.log(newCarsList);
//console.log(JSON.parse(newCarsList[0]));

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let usersMyList1 = [
    {name: 'vasya', age: 31, skills: ["C", "C++", "java"], status: false},
    {name: 'max', age: 30, skills: ["C", "C++", "linux", "embedded c"], status: true},
    {name: 'anya', age: 31, skills: ["Free BSD", "Net BSD", "macOS"], status: false},
    {name: 'oleg', age: 28, skills: ["python", "linux"], status: false},
    {name: 'andrey', age: 29, skills: ["ruby"], status: true},
    {name: 'masha', age: 30, skills: ["C", "java", "C++"], status: true},
    {name: 'olya', age: 31, skills: ["java"], status: false},
    {name: 'max', age: 31, skills: ["js", "Angular", "html", "css"], status: true}
];
// for(let Element of usersMyList1){
//     for (let i = 0; i < Element.skills.length; i++) {
//         console.log(Element.skills[i]);
//     }
//     console.log("-------");
// }
// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let skilsList = []
//
// for(let Element of usersMyList1){
//     for (let i = 0; i < Element.skills.length; i++) {
//         skilsList.push(Element.skills[i]);
//     }
// }
// console.log(skilsList);
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];
// for(let element of users){
//     for(let arrayItem of element.skills){
//         console.log(arrayItem);
//     }
//     console.log("-------");
// }
//
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let address = [];
// for(let element of users){
//     address.push(JSON.parse(JSON.stringify(element.address)));
// }
// console.log(address);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// Create a block that will contain all the other blocks
// let divAllInOne = document.createElement("div");
//
// for (let i = 0; i < users.length; i++) {
//     // Create a block for each user
//     let innerDiv = document.createElement("div");
//     innerDiv.style = "border: 1px solid black;margin:10px;"
//     for (key in users[i]) {
//
//         if (key === "address") {
//             let addresString = '';
//             //parse the adress object
//             for (let element in users[i][key]) {
//                 addresString = addresString + ` ${users[i][key][element]}`
//             }
//             innerDiv.innerText = innerDiv.innerText + addresString;
//         } else {
//             innerDiv.innerText = innerDiv.innerText + users[i][key];
//         }
//     }
//
//     divAllInOne.appendChild(innerDiv);
// }
// document.body.append(divAllInOne);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// Create a block that will contain all the other blocks
// divAllInOne = document.createElement("div");
// for (let i = 0; i < users.length; i++) {
//     // Create a block for each user
//     let innerDiv = document.createElement("div");
//     innerDiv.style = "border: 1px solid black;margin:10px;"
//
//     for (key in users[i]) {
//         // Create a block for each user's property
//         let elementDiv = document.createElement("div");
//
//         if (key === "address") {
//             let addresString = '';
//             //parse the adress object
//             for (let element in users[i][key]) {
//                 addresString = addresString + ` ${users[i][key][element]}`
//             }
//             elementDiv.innerText = addresString;
//
//         } else {
//             elementDiv.innerText = users[i][key];
//         }
//
//         //add user's property block to user block
//         elementDiv.style = "border: 1px solid red;margin:10px;"
//         innerDiv.appendChild(elementDiv);
//     }
//
//     divAllInOne.appendChild(innerDiv);
// }
// document.body.append(divAllInOne);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// divAllInOne = document.createElement("div");
// for (let i = 0; i < users.length; i++) {
//     // Create a block for each user
//     let innerDiv = document.createElement("div");
//     innerDiv.style = "border: 1px solid black;margin:10px;"
//     for (key in users[i]) {
//         // Create a block for each user's property
//         let elementDiv = document.createElement("div");
//
//         if (key === "address") {
//             //parse the adress object
//             for (let element in users[i][key]) {
//                 // Create a block for each address property
//                 let addresBlock = document.createElement("div");
//                 addresBlock.innerText = users[i][key][element];
//
//                 //add address property block to user's property block
//                 addresBlock.style = "border: 1px solid silver;margin:10px;"
//                 elementDiv.appendChild(addresBlock);
//             }
//         } else {
//             elementDiv.innerText = users[i][key];
//         }
//         //add user's property block to user block
//         elementDiv.style = "border: 1px solid red;margin:10px;"
//         innerDiv.appendChild(elementDiv);
//     }
//     divAllInOne.appendChild(innerDiv);
// }
// document.body.append(divAllInOne);


//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let usersAndAddress = [];
// for(let user of usersWithId){
//     for(let city of citiesWithId){
//         if(user.id === city.user_id){
//             let userTmp = JSON.parse(JSON.stringify(user));
//             userTmp.address = JSON.parse(JSON.stringify(city));
//             usersAndAddress.push(userTmp);
//         }
//     }
// }
// console.log(usersAndAddress);
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//

// - змінити цей текст використовуючи селектори id, class,  tag

// let divById = document.getElementById("new-id");
// divById.innerText =" change text using getElementById ";
// let divByClass = document.getElementsByClassName("block")[0];
// divByClass.innerText = divByClass.innerText + " change text using getElementsByClassName ";
// let divByTag = document.getElementsByTagName("div")[0];
// divByTag.innerText = divByTag.innerText + " change text using getElementsByTagName ";
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let divById = document.getElementById("new-id");
// divById.style = "width:300px;Height:200px;border:1px solid black";
// let divByClass = document.getElementsByClassName("block")[0];
// divByClass.style = "width:100px;Height:400px;border:1px solid black";
// let divByTag = document.getElementsByTagName("div")[0];
// divByTag.style = "width:200px;Height:200px;border:1px solid black";
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement("table");
// let tr = document.createElement("tr");
// let td1 = document.createElement("td");
// td1.style = "border:1px solid black; width:100px;height:10px;"
// let td2 = document.createElement("td");
// td2.style = "border:1px solid black; width:100px;height:10px;"
// let td3 = document.createElement("td");
// td3.style = "border:1px solid black; width:100px;height:10px;"
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.style = "border:1px solid black; width:100px;height:10px;"
//     let td2 = document.createElement("td");
//     td2.style = "border:1px solid black; width:100px;height:10px;"
//     let td3 = document.createElement("td");
//     td3.style = "border:1px solid black; width:100px;height:10px;"
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement("td");
//         td.style = "border:1px solid black;padding:3px;"
//         td.innerText = `row ${i+1} - cell ${j+1}`;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let table = document.createElement("table");
// table.style.borderCollapse = "collapse";
// let n = prompt("row");
// let m = prompt("cell in row");
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement("td");
//         td.style = "border:1px solid black;padding:3px;"
//         td.innerText = `row ${i+1} - cell ${j+1}`;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// let elementsWithId = document.getElementsByTagName("*");
// for(let element of elementsWithId){
//     if(element.getAttribute("id")){
//         console.log(element);
//     }
// }
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let elementsP = document.getElementsByTagName("p");
// for(let element of elementsP){
//     element.innerText = "oktenweb!";
//     element.style.fontSize = "20px";
// }
// //     - знайти всі div та змінити ім колір на червоний
// let elementsDiv = document.getElementsByTagName("div");
// for(let element of elementsDiv){
//     element.style.backgroundColor = "red";
// }
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
