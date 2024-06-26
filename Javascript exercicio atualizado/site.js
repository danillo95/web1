const imagens = document.querySelectorAll('img')

console.log("Lista de imagens:")
imagens.forEach(function(imagem, indice) {
    console.log("Imagem " + (indice + 1) + ": " + imagem.src)
})

const primeiroParagrafo = document.getElementById("qualquer");

primeiroParagrafo.textContent = "Varsóvia é a imensa capital da Polônia. Sua arquitetura diversificada reflete a longa e turbulenta história da cidade, incluindo desde igrejas góticas e palácios neoclássicos até quadras da era soviética e arranha-céus modernos. A Cidade Antiga foi restaurada após os graves danos sofridos durante a Segunda Guerra Mundial. O coração da cidade é a Praça do Mercado, com edifícios em tons pastel e cafés ao ar livre. O Monumento da Sereia de Varsóvia, localizado no centro da praça, é o símbolo da cidade."
