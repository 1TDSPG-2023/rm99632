"use strict";

// 1 –Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html.

let i = 1;

const dfltBgndColor = 'var(--default-bgnd-color)';
const dfltFontColor = 'var(--default-font-color)';
const dfltLiColor = 'var(--default-li-color)';

function changeBackgroundColor() {
    switch (i) {
        case 1:
            document.body.style.backgroundColor = dfltFontColor;
            document.body.style.color = dfltBgndColor;
            i--;
            break;
    
        default:
            document.body.style.backgroundColor = dfltBgndColor;
            document.body.style.color = dfltFontColor;
            i++;
            break;
    }
    document.body.style.transition = "1s";
}
