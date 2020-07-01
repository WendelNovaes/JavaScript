//Função para o clique
//Inner Html permite inserir html no elemento
function clicou(){
    //Passa valor para o elemento
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar, Clique sobre este texto para abrir uma nova janela ...</b>";

}

//Função para redirecionamento
function redirecionar(){
    window.open("https://www.google.com/");
}

//Função para mouse hover
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

//Função para mouse out
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

//Função load inicia alerte ao carregar a página -- função passada na tag body
function load(){
    alert("Página Carregada");
}

//Função para exibição dos elementos selecionados no console
function funcaoOnChange(elemento){
    console.log(elemento.value);
}
