"use strict";

// 1 –Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html.

let isDefault = true;

const dfltBgndColor = 'var(--default-bgnd-color)';
const dfltFontColor = 'var(--default-font-color)';
const dfltLiColor = 'var(--default-li-color)';
const darkLiColor = 'var(--dark-li-color)';
const dfltTitColor = 'var(--default-tit-color)';
const darkTitColor = 'var(--dark-tit-color)';

function changeToDefault() {
    const select_all_li = document.querySelectorAll('li');
    const select_all_tit = document.querySelectorAll('h1')
    document.body.style.backgroundColor = dfltBgndColor;
    document.body.style.color = dfltFontColor;
    select_all_li.forEach(li => {
        li.style.color = dfltLiColor;
    })
    select_all_tit.forEach(tit => {
        tit.style.color = dfltTitColor;
        tit.style.transition = '5s';
    })
}

function changeToDark() {
    const select_all_li = document.querySelectorAll('li');
    const select_all_tit = document.querySelectorAll('h1')
    document.body.style.backgroundColor = dfltFontColor;
    document.body.style.color = dfltBgndColor;
    select_all_li.forEach(li => {
        li.style.color = darkLiColor;
    })
    select_all_tit.forEach(tit => {
        tit.style.color = darkTitColor;
        tit.style.transition = '5s';
    })
}
        
function changeBackgroundColor() {
    if(isDefault) {
        changeToDefault();
        isDefault = false;
    } else {
        changeToDark();
        isDefault = true;
    }
    document.body.style.transition = "1s";
}
        
/*2–Crie um formulário com um campo de entrada de texto e um botão "Enviar". 
Quando o botão for clicado, o valor do campo de entrada deve ser adicionado como um novo item em uma lista na página.
Obs:
Utilizeo métodoconstnewItem = document.createElement('li'),para gerar um novo elemento li.
Utilize o método list.appendChild(newItem), para poder adicionar o novo item na lista ul. 
*/

function adicionar() {
    var item = document.getElementById("item").value;
    var list = document.getElementById("list");
    
    if (item !== '') { // Verifica se o campo não está vazio
      const newItem = document.createElement('li'); // Cria um novo elemento "li"
      newItem.textContent = item; // Define o conteúdo do novo elemento com o valor do campo de entrada de texto
      list.appendChild(newItem); // Adiciona o novo elemento na lista
  
      document.getElementById("item").value = ''; // Limpa o campo de entrada de texto
    }
}


