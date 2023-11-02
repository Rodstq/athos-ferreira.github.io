const myStringData = sessionStorage.getItem("string");
const sent = JSON.parse(myStringData); // Deserialize the array
const adic = sessionStorage.getItem("count");


var produtoss = document.getElementById("exibidor");
for (const elementHTML of sent) {
    produtoss.innerHTML += elementHTML;
}


const carrinhoCount = document.getElementById("produtos-adicionados");
carrinhoCount.innerHTML = adic;

// mantendo o valor de sent no sessionstorage
const currentProds = sessionStorage.setItem("current", sent);


