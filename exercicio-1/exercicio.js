"use strict";

//1 –Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html.

let isDefault = true;

const dfltBgndColor = 'var(--default-bgnd-color)';
const dfltFontColor = 'var(--default-font-color)';
const dfltLiColor = 'var(--default-li-color)';
const darkLiColor = 'var(--dark-li-color)';
const dfltTitColor = 'var(--default-tit-color)';
const darkTitColor = 'var(--dark-tit-color)';

function changeToDefault() {
    const select_all_li = document.querySelectorAll('li');
    const select_all_tit = document.querySelectorAll('h1');
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
    const select_all_tit = document.querySelectorAll('h1');
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
    
    if (item !== '') {
      const newItem = document.createElement('li'); 
      newItem.textContent = item; 
      list.appendChild(newItem); 
  
      document.getElementById("item").value = ''; 
    }
}

//3–Crie uma imagem com um botão que, quando clicado, troca a imagem por outra.

let counter = 1;

const btnPrev = document.getElementById("prev-img");
const btnNext = document.getElementById("next-img");
const imagem = document.getElementById("lobo-img");

btnNext.addEventListener("click", function() {
  if (imagem.src.includes("lobo1.jpg")) {
    imagem.src = "/img/lobo2.jpg";
  } else if(imagem.src.includes("lobo2.jpg")){
    imagem.src = "/img/lobo3.jpg";
  } else if(imagem.src.includes("lobo3.jpg")){
    imagem.src = "/img/lobo4.jpg";
  } else if(imagem.src.includes("lobo4.jpg")){
    imagem.src = "/img/lobo5.jpg";
  } else if(imagem.src.includes("lobo5.jpg")){
    imagem.src = "/img/lobo6.jpg";
  } else {
    imagem.src = "/img/lobo1.jpg";
  }
  console.log(imagem.src);
});

let loboNum = 6
btnPrev.addEventListener("click", function() {
    if (imagem.src.includes("lobo1.jpg")) {
      imagem.src = "/img/lobo6.jpg";
    } else if(imagem.src.includes("lobo6.jpg")){
      imagem.src = "/img/lobo5.jpg";
    } else if(imagem.src.includes("lobo5.jpg")){
      imagem.src = "/img/lobo4.jpg";
    } else if(imagem.src.includes("lobo4.jpg")){
      imagem.src = "/img/lobo3.jpg";
    } else if(imagem.src.includes("lobo3.jpg")){
      imagem.src = "/img/lobo2.jpg";
    } else {
      imagem.src = "/img/lobo1.jpg";
    }
    console.log(imagem.src);
});

//4–Crie um botão e um elemento qualquer html, quandoo botão éclicado, exibe uma mensagem neste elemento html na página .
function ocultarTexto() {
    var texto = document.getElementById("msg");
    texto.style.display = "none";
  }
  
function exibirTexto() {
    var texto = document.getElementById("msg");
    texto.style.display = "block";
}


//5–Crie um botão que, quando clicado, oculta um elemento HTML.
function ocultarMensagem() {

}

