var respostas = {}
const perguntas = document.querySelectorAll('.pergunta')
const btnEsq = document.querySelector('.voltar')
const btnDir = document.querySelector('.avancar')
const contadorDisplay = document.querySelector('.contador')
var botoesResposta = document.querySelectorAll('btn')

var indicePerguntaAtual = 0;

function exibirPergunta(indice) {
    perguntas.forEach((pergunta, index) => {
        if (index === indice) {
            pergunta.style.display = 'block';
        } else {
            pergunta.style.display = 'none';
        }

        contadorDisplay.innerHTML = (indice + 1) + '/' + perguntas.length;

        indicePerguntaAtual = indice;
    })
}

exibirPergunta(0);

btnEsq.addEventListener('click', () => {
    if (indicePerguntaAtual > 0) {
        respostas.pop()
        console.log(respostas);
        exibirPergunta(indicePerguntaAtual - 1);
    }
});

btnDir.addEventListener('click', function () {
    if (Object.keys(respostas).length > indicePerguntaAtual) {
        exibirPergunta(indicePerguntaAtual + 1);
    }
});

botoesResposta.forEach(function (botao) {
    botao.addEventListener('click', function () {
        var pergunta = botao.closest('section').classList[1];
        var resposta = botao.getAttribute('data-resposta');
        respostas[pergunta] = resposta === 'true';
        avancarPergunta(pergunta);
    });
});

function avancarPergunta(perguntaAtual) {
    var perguntas = document.querySelectorAll('section.pergunta');

    // for (var i = 0; i < perguntas.length; i++) {
    //     var perguntaClasse = perguntas[i].classList[1];
    //     if (!respostas.hasOwnProperty(perguntaClasse)) {
    //         console.log('Por favor, responda a todas as perguntas.');
    //         return;
    //     }
    // }

    var indicePerguntaAtual = Array.from(perguntas).findIndex(function (pergunta) {
        return pergunta.classList.contains(perguntaAtual);
    });
    botaoDireita.disabled = false;

    perguntas[indicePerguntaAtual].style.display = 'none';

    var indiceProximaPergunta = indicePerguntaAtual + 1;

    if (indiceProximaPergunta < perguntas.length) {
        exibirPergunta(indiceProximaPergunta)
        // perguntas[indiceProximaPergunta].style.display = 'block';
    }

    if (Object.keys(respostas).length === perguntas.length) {
        // console.log('Todas as perguntas foram respondidas:', respostas);
        alert("Todas as respostas obtidas")
    }
}