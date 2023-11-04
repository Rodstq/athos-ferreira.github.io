// adicionando todos os botoes de add ao carrinho na constante buttons
const buttons = document.getElementsByClassName("addcarrinho");
//adicionando elemento html que vai mostrar contagem do carrinho na variavel
const carrinhoCount = document.getElementById("produtos-adicionados");
//atribuindo valor da variavel de sessao count
var countAdicionados = sessionStorage.getItem("count");
// definindo array com todos elementos
const sent = [];
//definindo variavel para obter valor de produtos atualizados
const sessionSent = sessionStorage.getItem("current");
//definindo variavel preco total
const valorAtual = sessionStorage.getItem("valorAtual");
let valorTotalInt=0;

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

if(valorAtual > 0 && valorAtual!= null){
    valorTotalInt= parseFloat(valorAtual);
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

    const valorTotalString = currentElement.children[2].innerHTML;

    const adicionados = countAdicionados;
    sessionStorage.setItem("count", adicionados);

    let valorString = valorTotalString.slice(2,valorTotalString.length-1);
    let valorInt = parseFloat(valorString);
    valorTotalInt += valorInt;
    sessionStorage.setItem("valor",valorTotalInt);

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
}