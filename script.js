// Exibição das informações do elemento
const elementos = document.querySelectorAll('.elemento');
elementos.forEach(elemento => {
    elemento.addEventListener('click', () => {
        const nome = elemento.getAttribute('data-nome');
        const simbolo = elemento.getAttribute('data-simbolo');
        const numero = elemento.getAttribute('data-numero');
        const massa = elemento.getAttribute('data-massa');
        const grupo = elemento.getAttribute('data-grupo');
        const periodo = elemento.getAttribute('data-periodo');

        document.getElementById('nome').textContent = `Nome: ${nome}`;
        document.getElementById('simbolo').textContent = `Símbolo: ${simbolo}`;
        document.getElementById('numero').textContent = `Número Atômico: ${numero}`;
        document.getElementById('massa').textContent = `Massa: ${massa}`;
        document.getElementById('grupo').textContent = `Grupo: ${grupo}`;
        document.getElementById('periodo').textContent = `Período: ${periodo}`;
    });
});

// Função do Quiz
document.getElementById('submitQuiz').addEventListener('click', () => {
    let score = 0;
    const respostasCorretas = {
        q1: "H",
        q2: "6",
        q3: "16",
        q4: "Ca",
        q5: "2"
    };

    const form = document.getElementById('quizForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value.trim().toLowerCase() === respostasCorretas[input.id].toLowerCase()) {
            score++;
        }
    });

    document.getElementById('pontuacao').textContent = `Você acertou ${score} de 5 perguntas!`;
    document.getElementById('resultado').style.display = 'block';
});
