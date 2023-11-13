var myStringData = sessionStorage.getItem("string");
// Deserialize the array
var sentCarrinho = JSON.parse(myStringData);
var adic = sessionStorage.getItem("count");
var valor = parseFloat(sessionStorage.getItem("valor"));
var valorAtualCarrinho = sessionStorage.setItem("valorAtual", valor.toString());
var produtoss = document.getElementById("exibidor");
var lista = document.getElementsByClassName("exibidor");
if (produtoss != null) {

    for (var _i = 0, sentCarrinho_1 = sentCarrinho; _i < sentCarrinho_1.length; _i++) {
        var elementHTML = sentCarrinho_1[_i];
        produtoss.innerHTML += elementHTML;
    }
}

var carrinhoCountCarrinho = document.getElementById("produtos-adicionados");
carrinhoCountCarrinho.innerHTML = adic;
// mantendo o valor de sent no sessionstorage
var currentProds = sessionStorage.setItem("current", sentCarrinho);
var total = document.getElementById("total");
total.innerHTML = valor.toString();
sessionStorage.setItem("count", adic.toString());
