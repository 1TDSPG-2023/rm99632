"use strict";

// 1 –Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html.

let i = 1;

const dfltBgndColor = 'var(--default-bgnd-color)';
const dfltFontColor = 'var(--default-font-color)';
const dfltLiColor = 'var(--default-li-color)';
const darkLiColor = 'var(--dark-li-color)';

function changeBackgroundColor() {
    const select_all_li = document.querySelectorAll('li');
    switch (i) {
        default:
            document.body.style.backgroundColor = dfltBgndColor;
            document.body.style.color = dfltFontColor;
            select_all_li.forEach(li => {
                li.style.color = dfltLiColor;
            })
            i++;
            break;

        case 1:
            document.body.style.backgroundColor = dfltFontColor;
            document.body.style.color = dfltBgndColor;
            select_all_li.forEach(li => {
                li.style.color = darkLiColor;
            })
            i--;
            break;
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


