const images = document.querySelectorAll(".sneakers-lista img");
const textos = document.querySelectorAll(".sneakers-descricao section");

function displayText (index) {
    textos.forEach((texto)=>{
        texto.classList.remove("ativo");
    })
    textos[index].classList.add("ativo");
}

images.forEach((img,index)=>{
    img.addEventListener('click',() =>{ 
        displayText(index);
    }) 
});

const perguntas = document.querySelectorAll('.faq-lista dt');

perguntas.forEach((pergunta, event)=>{
    pergunta.addEventListener('click', ()=>{
        pergunta.classList.toggle('faq-ativo');
        const dd = pergunta.nextElementSibling;
        dd.classList.toggle('dd-ativo');
    })
});