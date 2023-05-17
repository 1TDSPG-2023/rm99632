// // CRIANDO OBJETOS
// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Denden da Silva",
//         nomeUsuario : "denden",
//         senha : "123456"
//     },
//     {
//         nomeCompleto : "Gersu da Silva",
//         nomeUsuario : "gege",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "José da Silva",
//         nomeUsuario : "jose",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Paulo das Couves",
//         nomeUsuario : "paulo",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Mary Help",
//         nomeUsuario : "mary",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Pedro Silva",
//         nomeUsuario : "pedro",
//         senhaUsuario : "123456"
//     }
// ];

// // GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
// localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


// ADCIONANDO FUNCIONALIDADE AOS BOTÕES

addEventListener("click", (evt)=>{
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");
    
    // SUBMIT
    if(evt.target.id == "btnSubmit"){
        try {

            // Recuperar a lista de usuarios do LocalStorage
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));


            listaDeUsuarios.forEach((usuario)=>{
                const isNomeValido = inputUser.value == usuario.nomeUsuario;
                const isSenhaValido = inputPass.value == usuario.senha || inputPass.value == usuario.senhaUsuario;
                
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
            // Redirect espera 3 segundos antes de redirecionar
            setTimeout( function (){
                window.location.href = "../pages/sucesso.html";
            }, 3000)
        
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

    else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){
        // EXIBINDO SENHA
        if(inputPass.getAttribute("type") == "text") {
            inputPass.setAttribute("type", "password");
            evt.target.setAttribute("class", "fa fa-eye");
        
        // OCULTANDO SENHA
        } else if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type", "text");
            evt.target.setAttribute("class", "fa fa-eye-slash");
        }


    } 
});