// adicionando todos os botoes de add ao carrinho na constante buttons
const buttons = document.getElementsByClassName("addcarrinho");
//adicionando elemento html que vai mostrar contagem do carrinho na variavel
const carrinhoCount = document.getElementById("produtos-adicionados");
//atribuindo valor da variavel de sessao count
var countAdicionados = sessionStorage.getItem("count");
const sent = [];
const sessionSent = sessionStorage.getItem("current");

// if( sessionSent == 0 || sessionSent==null){

// }else{
//     sent.push(sessionStorage.getItem("current"));
// }

if( sent.length != 0 || sessionSent !=null){
    sent.push(sessionStorage.getItem("current"));       
}


if(countAdicionados==0){

} else {
    carrinhoCount.innerHTML = countAdicionados;

}

const buttonPressed = function (e) {
    let currentElement = e.target.parentElement.parentElement.parentElement;
    ++countAdicionados;
    console.log(`Você adicionou: ${countAdicionados} produtos ao carrinho`);

    sent.push(currentElement.outerHTML);
    carrinhoCount.innerHTML = countAdicionados;
    const myStringData = JSON.stringify(sent);
    console.log(sent);
    sessionStorage.setItem("string", myStringData);


    const adicionados = countAdicionados;
    sessionStorage.setItem("count", adicionados);

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
}