function insereNumeroNoVisor(botao,visor) {
    // if(visorChar[visorChar.length])

    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){
        if(visor.value[visor.value.length - 1] === botao.value == "+" || visor.value[visor.value.length - 1] === botao.value == "-" || visor.value[visor.value.length - 1] === botao.value == "*" || visor.value[visor.value.length - 1] === botao.value == "/"){
            visor.value += visor.value.slice(visor.value.length - 1);
        }
        else{
            visor.value += botao.value;

        }
    } else {
        visor.value += botao.value;
    }
}

const resultadoDasOperacoes = (visor) =>{
    // Utilizar a função eval para processar uma string como se fosse uma expressão matematica
    visor.value = eval(visor.value); 

}



