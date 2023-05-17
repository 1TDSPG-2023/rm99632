//Gerando um token com Math.
let tokenGerado = Math.random().toString(16).substring(2);
//DECLARANDO OBJETOS
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario: "12345",
    gravaDados : true,
    token : tokenGerado
}

tokenGerado = Math.random().toString(16).substring(2);
//DECLARANDO OBJETOS
const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario: "12345",
    gravaDados : true,
    token : tokenGerado
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

addEventListener("click", (evt)=>{
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");
    
    if(evt.target.id == "btnSubmit"){
        
        
        try {

            listaDeUsuarios.forEach((usuario)=>{
                const isNomeValido = inputUser.value == usuario.nomeUsuario;
                const isSenhaValido = inputPass.value == usuario.senhaUsuario;
                
                if(isNomeValido && isSenhaValido){
                    throw "VALIDADO";
                } 
        })

        throw "NÃO VALIDADO";
    } catch(msg) {
        const msgError = document.querySelector("#msgError");
        if(msg == "VALIDADO") {
            msgError.setAttribute("style", "width: 25vw;"+
            "color: #00ff00;"+
            "background-color: #000000;"+
            "padding: 20px;"+
            "transition: 1s");
            msgError.innerHTML = "<span><strong><u>Login Efetuado com Sucesso!</u></strong></span>";
        } else {
            msgError.setAttribute("style", "width: 25vw;"+
            "color: #ff0000;"+
            "background-color: #000000;"+
            "padding: 20px;"+
            "transition: 1s");
            msgError.innerHTML = "<span><strong><u>Usuario ou Senha Invalidos!</u></strong></span>"
        }
    }


    }

    //DESAFIO :
    //Troque o ícone do olho aberto assim que o usuário clicar para ver a senha pelo icone de olho cortado.

    // EXIBINDO SENHA
    else if(evt.target.className == "fa fa-eye"){
        inputPass.setAttribute("type", "text");
        evt.target.setAttribute("class", "fa fa-eye-slash");

    } 
    // OCULTANDO SENHA
    else if(evt.target.className == "fa fa-eye-slash"){
        inputPass.setAttribute("type", "password");
        evt.target.setAttribute("class", "fa fa-eye");
    }
});