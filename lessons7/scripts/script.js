// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let divText = document.getElementById("text")
// let btnHideDiv = document.getElementById("hideDiv");
//
// btnHideDiv.onclick = () =>{
//     divText.style.display = "none";
// }
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btnHideButton = document.getElementById("hideButton");
// btnHideButton.onclick = () =>{
//     btnHideButton.style.display = "none";
// }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let submitBtn = document.forms.checkAge.submit;
// submitBtn.onclick = (ev) => {
//     ev.preventDefault();
//     let errorText = "";
//     let inputAge = document.forms.checkAge.age;
//
//     if (isNaN(inputAge.value)){
//         errorText = "enter the correct number";
//     }
//     if (inputAge.value < 18){
//         errorText = "you are under 18 years";
//     }
//
//     if(errorText){
//         let error = document.getElementById("errorsAge");
//         if(!error){
//             error = document.createElement("span");
//         }
//         error.innerHTML = errorText + "<br>";
//         error.id = "errorsAge";
//         error.style.color = "red";
//         document.forms.checkAge.insertBefore(error, inputAge);
//         //console.log(errorText);
//     }
// }

//
// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.createElement("ul");
// menu.style = "list-style:none;"
// menu.id = "menu";
//
// let liMenu = document.createElement("li");
// // li.style.display = "none";
// liMenu.style.cssText = "border-bottom:1px solid #000000;width: 100px; text-align:center; height: 20px";
// liMenu.innerText = "Menu";
//
// /* Create inner menu */
// let innerMenu = document.createElement("ul");
// innerMenu.style.display = "none";
// innerMenu.style.listStyle = "none";
// innerMenu.style.margin = "8px 0 0 -31px";
//
// /* Create items of the inner menu */
// let li = document.createElement("li");
// let a = document.createElement("a");
// a.innerText = "Home";
// a.href = "#";
// li.appendChild(a);
// innerMenu.appendChild(li);
//
// li = document.createElement("li");
// a = document.createElement("a");
// a.innerText = "About";
// a.href = "#";
// li.appendChild(a);
// innerMenu.appendChild(li);
//
// li = document.createElement("li");
// a = document.createElement("a");
// a.innerText = "Contacts";
// a.href = "#";
// li.appendChild(a);
// innerMenu.appendChild(li);
//
// liMenu.appendChild(innerMenu);
// menu.appendChild(liMenu);
// document.body.append(menu);
//
// menu = document.querySelector("#menu li");
// menu.onclick = (menu) => {
//     console.log(menu)
//     if(menu.target.lastElementChild.style.display === "none"){
//         menu.target.lastElementChild.style.display = "block";
//     }else {
//         menu.target.lastElementChild.style.display = "none";
//     }
// }


// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// //
// fetch('https://jsonplaceholder.typicode.com/comments').then((comments) => {
//     return comments.json()
// }).then( (comments) => {
//     comments.forEach((comment) => {
//         let div = document.createElement('div');
//         div.classList.add('comment');
//
//         let commentTitle = document.createElement('h2');
//         commentTitle.innerText = comment.name;
//         div.appendChild(commentTitle);
//
//         let commentBody = document.createElement('p');
//         commentBody.innerText = comment.body;
//         div.appendChild(commentBody);
//
//         let button = document.createElement('button');
//         button.innerText = 'HIDE';
//         div.appendChild(button);
//
//         document.body.appendChild(div);
//
//         button.onclick = () =>{
//             if(button.innerText === "HIDE"){
//                 commentBody.style.display = 'none';
//                 button.innerText = "SHOW";
//             }else {
//                 commentBody.style.display = 'block';
//                 button.innerText = "HIDE";
//             }
//
//         };
//     });
// });

// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// //
// let inputShow = document.getElementById("inputShow");
// inputShow.onclick = () =>{
//     let [firstFormTextOne, firstFormTextTwo] = document.forms.firstForm;
//     let [secondFormTextOne, secondFormTextTwo] = document.forms.secondForm;
//     console.log(`Form 1, input 1: ${firstFormTextOne.value}`);
//     console.log(`Form 1, input 2: ${firstFormTextTwo.value}`);
//     console.log(`Form 2, input 1: ${secondFormTextOne.value}`);
//     console.log(`Form 2, input 2: ${secondFormTextTwo.value}`);
// }

// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кліькіть ячеєк в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// //
// function tableGenerator(rows, columns, holdElementID) {
//     let table = document.createElement("table");
//     table.style.borderCollapse = "collapse";
//
//     for (let i = 0; i < rows; i++) {
//         let tr =  document.createElement("tr");
//         for (let j = 0; j < columns; j++){
//             td = document.createElement("td");
//
//             td.innerText = (i*10) + (j+1);
//             td.style.cssText = "border:1px solid #000000; padding:10px;";
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     let div = document.getElementById(holdElementID);
//     div.appendChild(table);
// }
// let tableDiv = document.createElement("div");
// tableDiv.id = "tableDiv";
// document.body.appendChild(tableDiv);
//
// tableGenerator(5, 10, "tableDiv");
//
//
// //
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// let tableForm = document.createElement("form");
// tableForm.name = "tableForm";
//
// let inputRows = document.createElement("input");
// inputRows.type = "text";
// inputRows.name = "rows";
// inputRows.id = "tableFormRows";
// inputRows.value = "enter number of rows";
// inputRows.onfocus = () => {inputRows.value = "";};
// tableForm.appendChild(inputRows);
//
//
// let inputColumns = document.createElement("input");
// inputColumns.type = "text";
// inputColumns.name = "columns";
// inputColumns.id = "tableFormColumns";
// inputColumns.value = "enter number of columns";
// inputColumns.onfocus = () => {inputColumns.value = "";};
// tableForm.appendChild(inputColumns);
//
// let inputText = document.createElement("input");
// inputText.type = "text";
// inputText.name = "text";
// inputText.id = "tableFormText";
// inputText.value = "text";
// inputText.onfocus = () => {inputText.value = "";};
// tableForm.appendChild(inputText);
//
// let input = document.createElement("input");
// input.type = "button";
// input.name = "button";
// input.value = "create";
// input.onclick = () => {
//
//     if (isNaN(inputRows.value) && isNaN(inputColumns.value)){
//         error.innerHTML = "enter the correct number <br>";
//     }else{
//         if(error.innerText){error.innerHTML = "<br>";}
//         tableGeneratorForm(inputRows.value, inputColumns.value, inputText.value)
//     }
// };
//
// tableForm.appendChild(input);
// document.body.appendChild(tableForm);
//
// /*Print errors*/
// error = document.createElement("span");
// error.id = "errorsFormTable";
// error.style.color = "red";
// error.innerHTML = "<br>";
// document.forms.tableForm.insertBefore(error, inputRows);


//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imagesList = [
//     {
//         "id": 1,
//         "title": "accusamus beatae ad facilis cum similique qui sunt",
//         "url": "1.jpg"
//     },
//     {
//         "id": 2,
//         "title": "reprehenderit est deserunt velit ipsam",
//         "url": "2.jpg"
//     },
//     {
//         "id": 3,
//         "title": "officia porro iure quia iusto qui ipsa ut modi",
//         "url": "3.jpg"
//     },
//     {
//         "id": 4,
//         "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//         "url": "4.jpg"
//     },
//     {
//         "id": 5,
//         "title": "natus nisi omnis corporis facere molestiae rerum in",
//         "url": "5.jpg"
//     }];
// let slider = document.createElement("div");
// // slider.classList = "slider";
// slider.style.cssText = `width: 600px;
//     height: 399px;
//     border: 5px solid silver;
//     margin: 0 auto;
//     position: relative;
//     overflow: hidden;`;
// document.body.appendChild(slider);
//
// let slidesContainer = document.createElement("div");
// // slidesContainer.classList = "slides-container";
// slidesContainer.style.cssText = `display: flex;
//     width: ${imagesList.length*100}%;`;
// slider.appendChild(slidesContainer);
//
// for (let i = 0; i < imagesList.length; i++) {
//     let slide = document.createElement("div");
//     slide.classList = "slide";
//     slide.style.cssText = `width: ${100/imagesList.length}%;position:relative;`;
//     let img =  document.createElement("img");
//     img.src = `./images/${imagesList[i].url}`;
//     slide.appendChild(img);
//     let text = document.createElement("div");
//     text.innerText = `${imagesList[i].title}`;
//     text.style.cssText = `position:absolute;
//         bottom:50px;
//         background-color: rgba(0,0,0,0.4);
//         color:#ffffff;
//         font-size:16px;
//         width: 100%;
//         text-align: center;
//         padding: 5px 0;`;
//     slide.appendChild(text);
//     slidesContainer.appendChild(slide);
// }
//
// let btnNext = document.createElement("div");
// btnNext.classList = "scroll-right";
// btnNext.style.cssText = `cursor: pointer;
//     padding: 16px;
//     font-weight: bold;
//     font-size: 35px;
//     transition: 1s ease;
//     position: absolute;
//     top: 50%;
//     background-color: rgba(256,256,256,0.4);
//     transform: translate(0, -50%);`;
// btnNext.innerText = ">";
// slider.appendChild(btnNext);
//
// let btnPrev = document.createElement("div");
// btnPrev.classList = "scroll-left";
// btnPrev.style.cssText = btnNext.style.cssText;
// btnPrev.innerText = "<";
// slider.appendChild(btnPrev);
//
// btnNext.style.cssText += `right: 0; border-radius: 5px 0 0 5px;`;
// btnPrev.style.cssText += `border-radius: 0 5px 5px 0;`;
//
//
// let img = document.getElementsByClassName("slide");
// let index = 0;
//
// img[0].style.marginLeft = `-${index*100/(imagesList.length+2)}%`;
// img[0].style.cssText += "transition: all 0.5s ease-out;";
//
// btnNext.onclick = () =>{
//     if(index<imagesList.length-1) {
//         index++;
//     }else{
//         index = 0;
//     }
//     img[0].style.marginLeft = `-${index*100/imagesList.length}%`;
// };
// btnPrev.onclick = () =>{
//     if(index>0) {
//         index--;
//     }else{
//         index = imagesList.length-1;
//     }
//     img[0].style.marginLeft = `-${index*100/imagesList.length}%`;
// };

//
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// //
// let array = ['fuck','bitch','damn','ass','cunt','shit','bugger', 'wanker'];
// let formGoodSpeek = document.createElement("form");
// let inputGoodSpeek = document.createElement("input");
// inputGoodSpeek.type = "text";
// formGoodSpeek.appendChild(inputGoodSpeek);
// let btnGoodSpeek = document.createElement("input");
// btnGoodSpeek.type = "button";
// btnGoodSpeek.value = "check";
// formGoodSpeek.appendChild(btnGoodSpeek);
// document.body.appendChild(formGoodSpeek);
//
// // btnGoodSpeek.onclick = () =>{
// //     let word = inputGoodSpeek.value.trim();
// //     let result = '';
// //     result = array.find(element => element === word);
// //     if(result){
// //         alert("stop using bad words!");
// //     }
// // };
//
// //
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// //
// btnGoodSpeek.onclick = () =>{
//     let words = inputGoodSpeek.value.split(' ');
//
//     for (const word of words) {
//         let result = '';
//         result = array.find(element => element === word);
//         if(result){
//             alert(`stop using bad words! you used ${word}`);
//         }
//     }
//
// };

//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан