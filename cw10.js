
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let divelement1=document.createElement('div')
// divelement1.innerText='div1'
// let divelement2=document.createElement('div')
// divelement2.innerText='div2'
// document.body.appendChild(divelement1)
// document.body.appendChild(divelement2)
//
// let form1=document.createElement('form')
// form1.setAttribute('name','form1')
// divelement1.appendChild(form1)
// let form2=document.createElement('form')
// form2.setAttribute('name','form2')
// divelement2.appendChild(form2)
// let input1=document.createElement('input')
// input1.setAttribute('name', 'input1')
// let input2=document.createElement('input')
// input2.setAttribute('name', 'input2')
// let input3=document.createElement('input')
// input3.setAttribute('name', 'input3')
// let input4=document.createElement('input')
// input4.setAttribute('name', 'input4')
// form1.append(input1,input2)
// form2.append(input3,input4)
// let btn=document.createElement('button')
// btn.innerText='info'
// btn.onclick=function (){
//     console.log(form1.input1.value)
//     console.log(form1.input1.value)
//     console.log(form2.input3.value)
//     console.log(form2.input4.value)
//     return(false)
// }
// form1.appendChild(btn)
// form2.appendChild(btn)

//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form=document.forms.tabble
// form.onsubmit=function (e){
//     e.preventDefault()
//     let row=+form.rows.value
//     let column=+form.columns.value
//     let cont=form.content.value
//     console.log(row, column, cont)
//     let tabble=document.createElement('table')
//     for (let i = 0; i < row; i++) {
//         let tr=document.createElement('tr')
//         for (let j = 0; j < column; j++) {
// let td=document.createElement('td')
//             tr.appendChild(td)
//             td.innerText=cont
//
//         }
//         tabble.appendChild(tr)
//     }
//     document.body.appendChild(tabble)
// }
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arrayofwords=['html','js','react','angular']
// let input=document.createElement('input')
// let btn=document.createElement('button')
// btn.innerText='check'
// document.body.append(input, btn)
// btn.onclick=function (){
//     let inputval=input.value
//     for (const element of arrayofwords) {
//         if (element===inputval){
//             alert('right')
//         }
//     }
// }
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arrayofwords=['html','js','react','angular']
// let input=document.createElement('input')
// let btn=document.createElement('button')
// btn.innerText='check'
// document.body.append(input, btn)
// btn.onclick=function (){
//     let inputval=input.value
//     for (const element of arrayofwords) {
//         if (inputval.includes(element)){
//             alert('right')
//         }
//     }
// }