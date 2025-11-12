// Seleciona os elementos do HTML
let circulo = document.querySelector(".circulo");
let imagemCopo = document.querySelector(".imagem-copo"); 

// Criamos uma ÚNICA função que recebe DOIS parâmetros
function mudarProduto(cor, imagem) {
    circulo.style.backgroundColor = cor; // Altera a cor do círculo
    imagemCopo.src = imagem;              // Altera a imagem do copo
}