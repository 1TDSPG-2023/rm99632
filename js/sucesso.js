
if(localStorage.getItem("user-token")){
    const elementoDeBoasVindas = document.querySelector("#welcome");

    //RECUPERAR O OBJETO USUARIO-VALIDADO DO LOCAL STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    elementoDeBoasVindas.innerHTML = 
    `<span>
        <p>SEJA BEM VINDO!!</p>
        <p>${usuarioValidado.nomeCompleto}</p>
    </span>`;

    const botaoSair = document.querySelector("#btnSair");
    botaoSair.addEventListener("click", ()=>{
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-validado");
        window.location.href = "../pages/login.html";
    })

}else{
    alert("Voce precisa estar logado para acessar este conteudo!");
    window.location.href = "../pages/login.html";
}



