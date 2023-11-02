
const buttons = document.getElementsByClassName("addcarrinho");
const carrinhoCount = document.getElementById("produtos-adicionados");
var countAdicionados = sessionStorage.getItem("count");
const sent = [];

if(sent==null){

}else{
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













// for(let i = 0; i<buttons.length; i++){
//     if(button.getAttribute("id") == buttons[i].getAttribute("id")){
//         button=buttons[i];
//     }
// }