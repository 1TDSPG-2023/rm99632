// CRIANDO OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Denden da Silva",
        nomeUsuario : "denden",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Gersu da Silva",
        nomeUsuario : "gege",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Paulo das Couves",
        nomeUsuario : "paulo",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Mary Help",
        nomeUsuario : "mary",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Pedro Silva",
        nomeUsuario : "pedro",
        senhaUsuario : "123456"
    }
];

// GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


// ADCIONANDO FUNCIONALIDADE AOS BOTÕES

addEventListener("click", (evt)=>{
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");
    
    //CRIANDO O OBJETO USER-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado : inputPass.value
    }

    //CRIANDO OBJETO USUARIO-VALIDADO
    let usuarioValidado = {};

    // SUBMIT
    if(evt.target.id == "btnSubmit"){
        try {
            // Recuperar a lista de usuarios do LocalStorage
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaDeUsuarios.forEach((usuario)=>{
                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && 
                    usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                    usuarioValidado = usuario;
                    throw "VALIDADO";
                } 
        })

        throw "NÃO VALIDADO";
    } catch(msg) {
        const msgError = document.querySelector("#msgError");
        if(msg == "VALIDADO") {
            msgError.setAttribute("style","color: #00ff00;"+"background-color: #000000;"+
            "display: flex;"+"justify-content: center;"+"item-align: center;"+"text-align: center;"+
            "padding: 20px;"+"transition: 1s;");
            msgError.innerHTML = `<span><strong><u>O usuario ${usuarioValidado.nomeCompleto} 
            efetuou o login com sushesho</u></strong></span>`;
            
            //ADCIONANDO O OBJETO USUARIO-VALIDADO 
            localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));
            
            //CRIANDO TOKEN DE AUTENTICACAO
            const token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);

            //ADCIONANDO TOKEN NO LOCAL-STORAGE
            localStorage.setItem("user-token", token);


            // Redirect espera 3 segundos antes de redirecionar
            setTimeout( function (){
                window.location.href = "../pages/sucesso.html";
            }, 3000);
        
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