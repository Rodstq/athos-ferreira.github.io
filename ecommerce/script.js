// adicionando todos os botoes de add ao carrinho na constante buttons
var buttons = document.getElementsByClassName("addcarrinho");
//adicionando elemento html que vai mostrar contagem do carrinho na variavel
var carrinhoCount = document.getElementById("produtos-adicionados");
//atribuindo valor da variavel de sessao count
var countAdicionadosString = checkStringOrNull(sessionStorage.getItem("count"));
var countAdicionados;
if (countAdicionadosString != " ") {
    countAdicionados = parseInt(countAdicionadosString);
}
else {
    countAdicionados = 0;
}
// adicionando numero ao lado de icone carrinho apenas de houverem produtos adicionados ao carrinho
if (parseInt(countAdicionadosString) != undefined && parseInt(countAdicionadosString) > 0) {
    carrinhoCount.innerHTML = countAdicionadosString;
}
// definindo array com todos elementos
var sent = [];
//definindo variavel para obter valor de produtos atualizados
var sessionSent = checkStringOrNull(sessionStorage.getItem("current"));
//definindo variavel preco total
var valorAtual = parseFloat(checkStringOrNull(sessionStorage.getItem("valorAtual")));
var valorTotalInt = 0;
if (sent.length != 0 || sessionSent != null) {
    sent.push(sessionSent);
}
// adicionando numero ao lado de icone carrinho apenas de houverem produtos adicionados ao carrinho
if (countAdicionados > 0) {
    carrinhoCount.innerHTML = countAdicionadosString;
}
if (valorAtual > 0 && valorAtual != null) {
    valorTotalInt = valorAtual;
}
function checkStringOrNull(s) {
    if (s == null) {
        return " ";
    }
    else {
        return s;
    }
}
var buttonPressed = function (e) {
    var currentElement = e.target.parentElement.parentElement.parentElement;
    ++countAdicionados;
    console.log("Voc\u00EA adicionou: ".concat(countAdicionados, " produtos ao carrinho"));
    sent.push(currentElement.outerHTML);
    carrinhoCount.innerHTML = countAdicionados.toString();
    var myStringData = JSON.stringify(sent);
    console.log(sent);
    sessionStorage.setItem("string", myStringData);
    var valorTotalString = currentElement.children[2].innerHTML;
    var adicionados = countAdicionados;
    sessionStorage.setItem("count", adicionados.toString());
    var valorString = valorTotalString.slice(2, valorTotalString.length - 1);
    var valorInt = parseFloat(valorString);
    valorTotalInt += valorInt;
    sessionStorage.setItem("valor", valorTotalInt.toString());
};
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
}
