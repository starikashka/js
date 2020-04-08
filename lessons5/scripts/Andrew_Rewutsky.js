// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }



// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// let tagA = new Tag("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.",
//     [{titleOfAttr:"accesskey", actionOfAttr:"Активация ссылки с помощью комбинации клавиш."},
//         {titleOfAttr:"href", actionOfAttr:"Задает адрес документа, на который следует перейти."},
//         {titleOfAttr:"rel", actionOfAttr:"Отношения между ссылаемым и текущим документами."}]);
// let tagAbbr = new Tag("abbr", "Тег <abbr> указывает, что последовательность символов является аббревиатурой.",
//     [{titleOfAttr:"title", actionOfAttr:"Добавляет всплывающую подсказку к тексту, в которой можно дать расшифровку аббревиатуры."}]);
// console.log(tagA);
// console.log(tagAbbr);

// class Tag {
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
// let tagBody = new Tag("body", "Элемент <body> предназначен для хранения содержания веб-страницы (контента), отображаемого в окне браузера.",
//     [{titleOfAttr:"alink", actionOfAttr:"Устанавливает цвет активной ссылки."},
//         {titleOfAttr:"background", actionOfAttr:"Задает фоновый рисунок на веб-странице."},
//         {titleOfAttr:"bgcolor", actionOfAttr:"Цвет фона веб-страницы."}]);
//
// console.log(tagBody);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model:"Fiesta ST",
//     manufacturer:"Ford",
//     production:2017,
//     maxSpeed:230,
//     engineCapacity:1.5,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(this);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     },
//     changeYear: function (newYear) {
//         this.production = newYear;
//     },
//     addDriver: function (driver) {
//        this.driver = driver;
//     }
// }
//  car.info();
// car.increaseMaxSpeed(250);
// car.drive();
// car.changeYear(2018);
// car.addDriver({name:"Vasko", age:87});
// car.info();

// let car = {
//     model:"Fiesta ST",
//     manufacturer:"Ford",
//     production:2015,
//     maxSpeed:230,
//     engineCapacity:1.5,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(this);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     },
//     changeYear: function (newYear) {
//         this.production = newYear;
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// }
// car.info();
// car.increaseMaxSpeed(250);
// car.drive();
// car.changeYear(2018);
// car.addDriver({name:"Vasko", age:87});
// car.info();


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function CarFunc(model, manufacturer, production, maxSpeed, engineCapacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.production = production;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(this);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         this.production = newYear;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let myFuncCar = new CarFunc("Focus RS","Ford",2018, 265, 2.5)
// myFuncCar.info();
// myFuncCar.increaseMaxSpeed(320);
// myFuncCar.drive();
// myFuncCar.changeYear(2020);
// myFuncCar.addDriver({name:"Panas", age:99});
// myFuncCar.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class CarClass {
//     constructor(model, manufacturer, production, maxSpeed, engineCapacity){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.production = production;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     };
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info() {
//         console.log(this);
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     changeYear(newYear) {
//         this.production = newYear;
//     };
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
//
// let myClassCar = new CarClass("Mustang GT","Ford",2018, 330, 5)
// myClassCar.info();
// myClassCar.increaseMaxSpeed(350);
// myClassCar.drive();
// myClassCar.changeYear(2019);
// myClassCar.addDriver({name:"Pylupko", age:3});
// myClassCar.info();


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, shoeSize){
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoe){
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// document.write("Cindarellas <br>");
// let cindarellas = [];
// for (let i = 0; i < 10; i++) {
//     cindarellas[i] = new Cinderella( `Cinderella${i+1}`,
//         Math.floor((Math.random() * 32 + 18)), Math.floor((Math.random() * 11 + 35)));
//     document.write(`Name: ${cindarellas[i].name}  age:${cindarellas[i].age} shoe size:${cindarellas[i].shoeSize} <br>`);
// }
// console.log(cindarellas);
//
// let princePylypko = new Prince( `Pylyp z Konopel`,
//     Math.floor((Math.random() * 32 + 18)), Math.floor((Math.random() * 11 + 35)));
// console.log(princePylypko);
// document.write("<br> Prince <br>");
// document.write(`Name: ${princePylypko.name}  age:${princePylypko.age} shoe size:${princePylypko.shoe} <br>`);
//
//
// let countCindarellas = [];
// for (let i = 0; i < cindarellas.length; i++){
//     if(cindarellas[i].shoeSize === princePylypko.shoe){
//         console.log(i);
//         countCindarellas.push(i);
//         console.log(i+"++");
//     }
//     console.log(i);
// }
//
// document.write("<br> The result of trying on shoes. <br>");
// if(!countCindarellas.length){
//     console.log("Make sure you have the right shoe!!");
//     document.write("Make sure you have the right shoe!!");
// }else {
//     if(countCindarellas.length == 1) {
//         console.log(`Your Cinderella is ${cindarellas[countCindarellas.length].name} and she is ${cindarellas[countCindarellas.length].age} years old`);
//         document.write(`Your Cinderella is ${cindarellas[countCindarellas[0]].name} and she is ${cindarellas[countCindarellas[0]].age} years old`);
//     } else {
//         console.log(`Do you have a shoe factory?`);
//         document.write(" Do you have a shoe factory? <br>");
//         for (const count of countCindarellas) {
//             console.log(`Your Cinderella is ${cindarellas[count].name} and she is ${cindarellas[count].age} years old`);
//             document.write(`---- Your Cinderella is ${cindarellas[count].name} and she is ${cindarellas[count].age} years old <br>`);
//         }
//     }
// };


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function CinderellaFuncObj(name, age, shoeSize){
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

function  Prince(name, age, shoe){
    this.name = name;
    this.age = age;
    this.shoe = shoe;

    this.cindarellaSearch = function(cindarellaList){
        let countCindarellas = [];
        for (let i = 0; i < cindarellaList.length; i++){
            if(cindarellaList[i].shoeSize === this.shoe){
                console.log(i);
                countCindarellas.push(i);
                console.log(i+"++");
            }
            console.log(i);
        }
        document.write("<br> The result of trying on shoes. <br>");
        if(!countCindarellas.length){
            console.log("Make sure you have the right shoe!!");
            document.write("Make sure you have the right shoe!!");
        }else {
            if(countCindarellas.length == 1) {
                console.log(`Your Cinderella is ${cindarellaList[countCindarellas.length].name} and she is ${cindarellaList[countCindarellas.length].age} years old`);
                document.write(`Your Cinderella is ${cindarellaList[countCindarellas[0]].name} and she is ${cindarellaList[countCindarellas[0]].age} years old`);
            } else {
                console.log(`Do you have a shoe factory?`);
                document.write(" Do you have a shoe factory? <br>");
                for (const count of countCindarellas) {
                    console.log(`Your Cinderella is ${cindarellaList[count].name} and she is ${cindarellaList[count].age} years old`);
                    document.write(`---- Your Cinderella is ${cindarellaList[count].name} and she is ${cindarellaList[count].age} years old <br>`);
                }
            }
        };
    }
}

document.write("Cindarellas <br>");
let cindarellas = [];
for (let i = 0; i < 10; i++) {
    cindarellas[i] = new CinderellaFuncObj  ( `Cinderella${i+1}`,
        Math.floor((Math.random() * 32 + 18)), Math.floor((Math.random() * 11 + 35)));
    document.write(`Name: ${cindarellas[i].name}  age:${cindarellas[i].age} shoe size:${cindarellas[i].shoeSize} <br>`);
}
console.log(cindarellas);
let princeYuzuk = new Prince( `Yuzuk`,
    Math.floor((Math.random() * 32 + 18)), Math.floor((Math.random() * 11 + 35)));
console.log(princeYuzuk);
document.write("<br> Prince <br>");
document.write(`Name: ${princeYuzuk.name}  age:${princeYuzuk.age} shoe size:${princeYuzuk.shoe} <br>`);

princeYuzuk.cindarellaSearch(cindarellas);