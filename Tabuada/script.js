function gerarTabuada() {
    // Obtém o valor do input com id "numero"
    var inputNumero = document.getElementById("numero").value;
    // Obtém a div onde a tabuada será exibida
    var tabuadaDiv = document.getElementById("tabuada");

    // Verificar se a entrada está vazia
    if (inputNumero.trim() === "") {
        // Se estiver vazia, exibe uma mensagem de erro e interrompe a execução
        tabuadaDiv.innerHTML = "<p class='error-message'>Por favor, digite um número.</p>";
        return;
    }

    // Verificar se a entrada é um número válido
    var numero = parseFloat(inputNumero);
    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
        // Se não for um número válido, exibe uma mensagem de erro e interrompe a execução
        tabuadaDiv.innerHTML = "<p class='error-message'>Por favor, digite um número inteiro positivo válido.</p>";
        return;
    }

    // Inicializa a variável para armazenar o HTML da tabuada
    var tabuadaHTML = "<h3>Tabuada do " + numero + "</h3><table><tr><th>Número</th><th>Resultado</th></tr>";

    // Loop para calcular e criar as linhas da tabuada
    for (var i = 1; i <= 10; i++) {
        // Adiciona uma linha para cada multiplicação na tabuada
        tabuadaHTML += "<tr><td>" + numero + " x " + i + "</td><td>" + (numero * i) + "</td></tr>";
    }

    // Fecha a tabela e atualiza o conteúdo da div com a tabuada gerada
    tabuadaHTML += "</table>";
    tabuadaDiv.innerHTML = tabuadaHTML;
}