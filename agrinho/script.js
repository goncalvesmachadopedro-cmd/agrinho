function calcularDiagnostico() {
    // Captura os elementos do formulário
    const agua = document.getElementById('agua').value;
    const solo = document.getElementById('solo').value;
    const defensivos = document.getElementById('defensivos').value;
    
    // Validação simples para garantir que responderam tudo
    if (!agua || !solo || !defensivos) {
        alert("Por favor, responda a todas as perguntas antes de continuar.");
        return;
    }

    // Soma a pontuação (convertendo os valores de texto para números)
    const pontuacaoTotal = Number(agua) + Number(solo) + Number(defensivos);

    // Captura os elementos onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado');
    const statusNivel = document.getElementById('status-nivel');
    const feedbackTexto = document.getElementById('feedback-texto');
    const form = document.getElementById('quiz-form');

    // Reseta as classes de estilo anteriores do resultado
    resultadoDiv.className = "";

    // Lógica do diagnóstico com base na pontuação (Máximo: 9, Mínimo: 3)
    if (pontuacaoTotal >= 8) {
        statusNivel.innerText = "Excelente (Sustentável)";
        resultadoDiv.classList.add("excelente");
        feedbackTexto.innerText = "Parabéns! Suas práticas agrícolas estão alinhadas com a preservação ambiental. Continue utilizando tecnologias de precisão e manejo biológico para liderar o agro verde.";
    } else if (pontuacaoTotal >= 5) {
        statusNivel.innerText = "Regular (Em Transição)";
        resultadoDiv.classList.add("regular");
        feedbackTexto.innerText = "Você já adota boas iniciativas, mas ainda há espaço para melhorias. Considere implementar o plantio direto contínuo e monitorar mais de perto o desperdício de água.";
    } else {
        statusNivel.innerText = "Crítico (Alerta Ambiental)";
        resultadoDiv.classList.add("critico");
        feedbackTexto.innerText = "Atenção: Suas práticas atuais geram alto impacto ambiental e riscos de degradação. Recomendamos buscar o apoio técnico da Embrapa ou órgãos locais para adotar práticas de conservação do solo e da água.";
    }

    // Esconde o formulário e exibe a área de resultado
    form.classList.add("hidden");
    resultadoDiv.classList.remove("hidden");
}

function reiniciarJanela() {
    // Recarrega a página para resetar o questionário
    location.reload();
}
