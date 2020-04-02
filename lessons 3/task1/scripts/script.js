// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
// let dog={
//     name: "Sirko",
//     age:5,
//     breed:"Komondor",
//     temperament:"calm",
//     height:0.8
// };
// let human={
//     name:"Anna",
//     age:25,
//     height:1.68,
//     sex:"female",
//     maritalStatus:"single",
//     children:null
// };
// let car={
//     model:"Ford Mustang",
//     manufacturer:"Ford",
//     bodyStyle:"coupe",
//     engine:"3.7 L Cyclone V6",
//     transmission:"6-Speed manual"
// };
// let flat={
//     area: 86,
//     rooms: 3,
//     parking: false,
//     floor:4,
//     location: "Stryiskaya 5"
// };
// let book={
//     name:"Compilers: Principles, Techniques, and Tools (2nd Edition)",
//     author:"Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D. Ullman",
//     publication: 2006,
//     pages: 1040,
//     bookDescription:"Compilers: Principles, Techniques and Tools, known to professors, students, and developers worldwide as the \"Dragon Book,\" is available in a new edition.  Every chapter has been completely revised to reflect developments in software engineering, programming languages, and computer architecture that have occurred since 1986, when the last edition published.  The authors, recognizing that few readers will ever go on to construct a compiler, retain their focus on the broader set of problems faced in software design and software development."
// };
//
//
// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
// //
//
// let arrayDogs = [
//     dog1={
//         name: "Сірко",
//         age:5,
//         breed:"Komondor",
//         temperament:"calm",
//         height:0.8
//     },
//     dog2={
//         name: "Вулкан",
//         age:11,
//         breed:"Belgian Shepherd",
//         temperament:"sensitive",
//         height:0.6
//     },
//     dog3={
//         name: "Граф",
//         age:1,
//         breed:"Great Dane",
//         temperament:"friendly",
//         height:0.75
//     },
//     dog4={
//         name: "Ніка",
//         age:3,
//         breed:"Chihuahua",
//         temperament: "timid",
//         height:0.2
//     },
//     dog5={
//         name: "Стрілка",
//         age:7,
//         breed:"German Shepherd",
//         temperament:"calm",
//         height:0.7
//     }
// ];
// console.log(arrayDogs);
// let arrayHumans = [
//     human={
//         name:"Anna",
//         age:25,
//         height:1.68,
//         sex:"female",
//         maritalStatus:"single",
//         children:null
//     },
//     human={
//         name:"Emma",
//         age:41,
//         height:1.71,
//         sex:"female",
//         maritalStatus:"married",
//         children:2
//     },
//     human={
//         name:"Alex",
//         age:10,
//         height:1.23,
//         sex:"male",
//         maritalStatus:"single",
//         children:null
//     },
//     human={
//         name:"Wanda",
//         age:79,
//         height:1.65,
//         sex:"female",
//         maritalStatus:"widowed",
//         children:3
//     },
//     human={
//         name:"Chris",
//         age:47,
//         height:1.68,
//         sex:"female",
//         maritalStatus:"divorced",
//         children:1
//     }
// ];
// console.log(arrayHumans);
// let arrayCars = [
//     car={
//         model:"Ford Mustang",
//         manufacturer:"Ford",
//         bodyStyle:"coupe",
//         engine:"3.7 L Cyclone V6",
//         transmission:"6-Speed manual"
//     },
//     car={
//         model:"Citroën DS",
//         manufacturer:"Citroën",
//         bodyStyle:"sedan",
//         engine:"2,175 cc (132.7 cu in) I4 (DS 21)",
//         transmission:"5-speed manual"
//     },
//     car={
//         model:"Chevrolet Suburban",
//         manufacturer:"General Motors",
//         bodyStyle:"Pickup truck",
//         engine:"Duramax 6.6-liter turbo diesel",
//         transmission:"4-speed automatic"
//     },
//     car={
//         model:"Volkswagen Passat",
//         manufacturer:"Volkswagen",
//         bodyStyle:"coupe",
//         engine:"3.6-liter VR6",
//         transmission:"automatic"
//     },
//     car={
//         model:"Audi Q7",
//         manufacturer:"Audi",
//         bodyStyle:"4-door SUV",
//         engine:"3.6 FSI quattro",
//         transmission:"6-Speed manual"
//     }
// ];
// console.log(arrayCars);
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// let houseObject={
//     rooms:3,
//     parking: false,
//     familyList:["Piter","Masha","Vasya","Olya"],
//     area:{
//         livingRoom:30,
//         kitchen:15,
//         bedroom1:15,
//         bedroom2:20,
//         bathroom:15
//     },
//     garage: true
// }
// // - водій
// let driverObject={
//     name:"Colin McRae",
//     age: 39,
//     teams:["Subaru", "Citroën", "Ford", "Škoda"],
//     winner:1995,
//     result:{
//         RallyeMonteCarlo:"retire",
//         SwedishRally:"retire",
//         RallyeDePortugal:3,
//         RallyeDeFrance:5,
//         RallyNewZealand:1,
//         RallyAustralia:2,
//         RallyCatalunya:2,
//         RACRally:1
//     }
// }
// // - іграшку
// let toy = {
//     color:'purple',
//     size: 30,
//     materail:['cotton','poliester'],
//     eyes:{color:'black', type:'plastic'}
// }
// // - стіл
// let table = {
//     color:'brown',
//     type: 'quadrate',
//     materail:['wood','plastic'],
//     legs:{type:'iron'}}
// // - сумка
// let bag = {
//     firm:'louis vuitton',
//     age:2,
//     material:['leather','iron'],
//     isGood:true,
//     inside:{color:'black'}
// }
//
//
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[10].status);
// // - ім'я передостаннього об'єкту
// console.log(users[users.length-2].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[3].age);
// // - вік + ім'я 5го об'єкта
// console.log(`${users[4].age} ${users[4].name}`);
// // - вік + сатус Анни
// console.log(`${users[5].age} ${users[5].name}`);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// // - отримує текст з параграфа з id "content"
// let contentIdElement = document.getElementById("content");
// //console.log(contentIdElement.innerText);
// // - отримує текст з блоку з id "rules"
// let rulesIdElement = document.getElementById("rules");
// //console.log(rulesIdElement.innerText);
//
// // - замініть текст параграфа з id 'content' на будь-який інший
// contentIdElement.innerText = "new text in content block";
//
// // - замініть текст параграфа з id 'rules' на будь-який інший
// rulesIdElement.innerText = "new text in rules block";
//
// // - змініть кожному елементу колір фону на червоний
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     if(document.body.childNodes[i].nodeName !== "#text"){
//         document.body.childNodes[i].style.backgroundColor="red";
//     }
// }
//
// // - змініть кожному елементу колір тексту на синій
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     if(document.body.childNodes[i].nodeName !== "#text"){
//         document.body.childNodes[i].style.color="blue";
//     }
// }
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rulesIdElement.classList);
// // - отримати всі елементи з класом fc_rules
// let fc_rulesClassElements = document.getElementsByClassName("fc_rules");
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for(let element of fc_rulesClassElements){
//     element.style.color = "red";
// }
//
// ====================
// ====================
// ====================
//
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_headerElement = document.getElementById("main_header");
main_headerElement.style.color = "silver";

// -- робить шириниу елементу ul 400 пікселів
document.getElementsByTagName("ul")[0].style.width = "400px";

// -- робить шириниу всіх елементів з класом linkList шириною 50%
for(let element of document.getElementsByClassName("linkList")){
    element.style.width = "50%"
}

// -- отримує текст який зберігається в елементі з класом listElement2
for(let element of document.getElementsByClassName("listElement2")){
    console.log(element.innerText);
}

// -- отримує всі елементи li та змінює ім колір фону на сірий
for(let element of document.getElementsByTagName("li")){
    element.style.backgroundColor = "grey";
}

// -- отримує всі елементи 'a' та додає їм клас anchor
for(let element of document.getElementsByTagName("a")){
    element.classList = element.classList + "anchor";
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for(let element of document.getElementsByTagName("a")){
    if(element.innerText === "link3")
    element.style.fontSize = "40px";
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for(let element of document.getElementsByTagName("a")){
    element.classList = `${element.classList} element_${element.innerText}`;
}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// for(let element of document.getElementsByClassName("sub-header")){
//     element.style.backgroundColor = prompt("Enter color");
// }
// --
// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for(let element of document.getElementsByClassName("sub-header")){
//     if(element.innerText === "content 2 segment"){
//         element.style.backgroundColor = prompt("Enter color");
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// for(let element of document.getElementsByClassName("content_1")){
//     element.innerText = prompt("Please enter some text");
// }

// -- отримати елементи p та змінити їм paddin на довільне значення
for(let element of document.getElementsByTagName("p")){
    element.style.padding = "20px";
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
for(let element of document.getElementsByClassName("text2")){
    element.innerText = "Some text";
}
