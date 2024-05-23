const imagens = document.querySelectorAll('img')

console.log("Lista de imagens:")
imagens.forEach(function(imagem, indice) {
    console.log("Imagem " + (indice + 1) + ": " + imagem.src)
})

const primeiroParagrafo = document.getElementById("qualquer");

primeiroParagrafo.textContent = "Top 5 lugares DESEJADOS para se visitar"
