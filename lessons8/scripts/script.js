// // - Дана textarea.
// //     В неё вводится текст.
// //     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// //

// let textArea = document.getElementById("textArea");
// let tmpText = localStorage.getItem('textArea');
//
// if(tmpText){
//     textArea.value = tmpText;
// }
// textArea.oninput = () => {
//     localStorage.setItem("textArea", textArea.value);
// }

// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// //     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// //     Сделайте ваш скрипт как можно более универсальным.
// //
//
// let checkForm= document.forms.checkForm;
//
// let formData = localStorage.getItem('formData');
// // перевіряєм чи є збережені дані
// if(formData){
//     formData = JSON.parse(localStorage.getItem('formData'));
// }else{
//     // якщо ні створюєм новий об'єкт
//     formData = new Object();
// }
//
// let inputArray = checkForm.getElementsByTagName("input");
// let textareaArray = checkForm.getElementsByTagName("textarea");
//
// for (let i = 0; i < inputArray.length; i++) {
//
//     if(inputArray[i].type === "text"){
//         // перевіряєм чи є збережене значення
//         if(formData[inputArray[i].name]){
//             inputArray[i].value = formData[inputArray[i].name];
//         }
//
//         inputArray[i].oninput = function () {
//             formData[this.name] =  inputArray[i].value;
//             localStorage.setItem("formData", JSON.stringify(formData));
//         }
//
//     }
//     if(inputArray[i].type === "radio"){
//         // перевіряєм чи є збережене значення
//         if(inputArray[i].value === formData[inputArray[i].name]){
//             inputArray[i].checked = true;
//         }
//         inputArray[i].onchange = function () {
//             formData[this.name] =  inputArray[i].value;
//             localStorage.setItem("formData", JSON.stringify(formData));
//         }
//     }
//     if(inputArray[i].type === "checkbox"){
//         // перевіряєм чи є збережене значення
//         if(formData[inputArray[i].name]){
//             inputArray[i].checked = true;
//         }
//         inputArray[i].onchange = function () {
//             formData[this.name] = inputArray[i].checked;
//             localStorage.setItem("formData", JSON.stringify(formData));
//         }
//     }
// }
// for (let i = 0; i < textareaArray.length; i++){
//     // перевіряєм чи є збережене значення
//     if(formData[textareaArray[i].name]){
//         textareaArray[i].value = formData[textareaArray[i].name];
//     }
//     textareaArray[i].oninput = function () {
//         formData[this.name] = textareaArray[i].value;
//         localStorage.setItem("formData", JSON.stringify(formData));
//     }
// }


// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// //
// let subVersionText = document.forms.subVersionText;
//
// let save = subVersionText.save;
// let back = subVersionText.back;
// let forward = subVersionText.forward;
// let text = subVersionText.text;
//
// let version = +localStorage.getItem('version');
// let current;
//
// if(!version){
//     //Якщо історія чиста робимо кнопки неактивні
//     version = 0;
//     console.log(version);
//     back.disabled = true;
//     forward.disabled = true;
// }else{
//     text.value = localStorage.getItem(version);
//     current = version;
//     forward.disabled = true;
// }
//
// save.onclick = () =>{
//     version++;
//     localStorage.setItem(version, text.value);
//     localStorage.setItem("version", version);
//
//     current = version;
//
//     //Перевіряєм чи кнопка back активна
//     if(back.disabled){
//         back.disabled=false;
//     }
//     //Перевіряєм чи кнопка forward не активна
//     if(!forward.disabled){
//         forward.disabled=true;
//     }
// };
// back.onclick = () =>{
//     // Показуєм попередню версію
//     current--;
//     text.value = localStorage.getItem(current);
//
//     // Якщо кнопку forward не активна, розблоковуєм її
//     if(forward.disabled){
//         forward.disabled=false;
//     }
//
//     // Якщо попередніх версій немає блокуєм кнопку back
//     if(!(current-1)){
//         back.disabled = true;
//     }
// };
//
// forward.onclick = () =>{
//     // Показуєм наступну версію
//     current++;
//     text.value = localStorage.getItem(current);
//
//     // Якщо кнопку back не активна, розблоковуєм її
//     if(back.disabled){
//         back.disabled=false;
//     }
//
//     // Якщо наступних версій немає блокуєм кнопку forward
//     if(current === version){
//         forward.disabled = true;
//     }
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

//функція шукає в localStorage всі дані і виводить
function showContact() {
    let maxId = +localStorage.getItem('addressId');

    if(maxId){
        let div = document.getElementById("addressBookDiv");
        div.innerText='';
        for (let i = 1; i <= maxId; i++) {
            let contact = localStorage.getItem(`conact${i}`);
            if(contact){
                let contactDiv = document.createElement('div');
                contactDiv.setAttribute('contactid', i)
                contactDiv.innerText = contact;
                let editBtn = document.createElement('button');
                editBtn.type = 'button';
                editBtn.innerText = 'E';
                editBtn.onclick = function(){
                    editContact(i);
                }
                let delBtn = document.createElement('button');
                delBtn.type = 'button';
                delBtn.innerText = 'D';
                delBtn.onclick = function(){
                    delContact(i);
                }
                contactDiv.appendChild(editBtn);
                contactDiv.appendChild(delBtn);
                div.appendChild(contactDiv);

            }
        }
    }
}
let addressDiv = document.getElementById('addressBookDiv');
let addressForm = document.forms.addressBook;
let id = +localStorage.getItem('addressId');
if(!id){
    id=1;
};


showContact();

//зберігає новий та відредагований контак
addressForm.save.onclick = () =>{
    let obj = new Object();
    let index;

    obj.name = addressForm.name.value;
    obj.phone = addressForm.phone.value;
    obj.email = addressForm.email.value;
    obj.company = addressForm.company.value;
    obj.department = addressForm.department.value;
    obj.birthday = addressForm.birthday.value;

    // якщо в contactsID є індекс контакта  то зберігаємо у ньому. Інакше створюємо новий
    if(addressForm.contactsID.value){
        index= addressForm.contactsID.value;

    }else{
        index = id;
    }

    localStorage.setItem(`conact${index}`, JSON.stringify(obj));
    localStorage.setItem(`addressId`, id);

    id++;

    resetForm();
    showContact();
}

function editContact(index){
    let contact = localStorage.getItem(`conact${index}`);
    contact = JSON.parse(contact);

    let form = document.forms.addressBook;

//заповнюєм форму даними по id
    form.name.value = contact.name;
    form.phone.value = contact.phone;
    form.email.value = contact.email;
    form.company.value = contact.company;
    form.department.value = contact.department;
    form.birthday.value = contact.birthday;
    form.contactsID.value = index;
}

//функція скидає поля форми
function resetForm() {
    let form = document.forms.addressBook;

    form.name.value = '';
    form.phone.value = '';
    form.email.value = '';
    form.company.value = '';
    form.department.value = '';
    form.birthday.value = '';
    form.contactsID.value = '';
}
function delContact(index){
    localStorage.removeItem(`conact${index}`);
    showContact();
}