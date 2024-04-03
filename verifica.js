var respostas = {};

const perguntasT = [
    {
        id: 1,
        pergunta: 'Você está em boas condições de saúde?',
        btn_nao: 'false',
        btn_sim: 'true',
        resposta: 'Você não esta em boas condições de saúde;'
    },
    {
        id: 2,
        pergunta: 'Você pesa mais que 50 quilos?',
        btn_nao: 'false',
        btn_sim: 'true',
        resposta: 'Você pesa menos que 50 quilos;'
    },
    {
        id: 3,
        pergunta: 'Você tem entre 16 e 69 anos de idade? (Permitida doação a partir de 16 anos se acompanhado de responsável legal à cada doação)',
        btn_nao: 'false',
        btn_sim: 'true',
        resposta: 'Você não cumpre os requisitos de idade;'
    },
    {
        id: 4,
        pergunta: 'Você teve alguma vacinação recente?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você teve alguma vacinação recente;'
    },
    {
        id: 5,
        pergunta: 'Você tem algum piercing na língua ou genital?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você tem algum piercing na língua ou genital;'
    },
    {
        id: 6,
        pergunta: 'Você tem alguma tatuagem, maquiagem definitiva feita nos ultimos 12 meses?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você tem alguma tatuagem ou maquiagem definitiva;'
    },
    {
        id: 7,
        pergunta: 'Você teve algum sintoma de gripe nos últimos 15 dias?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você teve algum sintoma de gripe nos ultimos 15 dias;'
    },
    {
        id: 8,
        pergunta: 'Você está grávida ou amamentanto?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você está grávida ou amamentando;'
    },
    {
        id: 9,
        pergunta: 'Você fez alguma cirurgia específica? (isso será avaliado na entrevista)',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você fez alguma cirurgia específica <strong>(Isso será avaliado na entrevista)*</strong>;'
    },
    {
        id: 10,
        pergunta: 'Você tem DST ou situações nas quais há maior risco de adquirir DST? (aguardar 12 meses)',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você tem DST ou risco de ter (aguardar 12 meses);'
    },
    {
        id: 11,
        pergunta: 'Você faz uso de algum medicamento? (Isso será avaliado na entrevista)',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você faz uso de algum medicamento <strong>(Isso será avaliado na entrevista)*</strong>;'
    },
    {
        id: 12,
        pergunta: 'Você teve hepatite após os 11 anos de idade?',
        btn_nao: 'true',
        btn_sim: 'false',
        resposta: 'Você teve hepatite após 11 anos de idade;'
    }
]

const pergunta = document.querySelector('.pergunta');
var indicePerguntaAtual = 0;
const contador = document.querySelector('.header-contador h1');
const resultado_A = document.querySelector('.apto')
const resultado_NA = document.querySelector('.nao-apto')

const pergunta1 = document.querySelector('.titulo-pergunta h1')
const btn_nao = document.getElementById("btn-nao")
const btn_sim = document.getElementById('btn-sim')
const btn_cancelar = document.querySelector('.btn-cancelar')
const btn_voltar = document.querySelector('.voltar a')

const req_NA = document.querySelector('.req-nao-cumpridos')


function exibirPergunta(indice) {


    pergunta1.innerHTML = perguntasT[indice].pergunta
    btn_nao.value = perguntasT[indice].btn_nao
    btn_sim.value = perguntasT[indice].btn_sim
    console.log(btn_nao.value, btn_sim.value);

    contador.innerHTML = (indice + 1) + '/' + perguntasT.length;
    indicePerguntaAtual = indice;
}


var botaoEsquerda = document.querySelector('.header-contador .btn-esq');
var botaoDireita = document.querySelector('.header-contador .btn-dir');


botaoEsquerda.addEventListener('click', function () {
    if (indicePerguntaAtual > 0) {
        exibirPergunta(indicePerguntaAtual - 1);
    }
});

botaoDireita.addEventListener('click', function () {
    if (Object.keys(respostas).length > indicePerguntaAtual) {
        exibirPergunta(indicePerguntaAtual + 1);
    }
});

var botoesResposta = document.querySelectorAll('.buttons button');

botoesResposta.forEach(function (botao) {
    botao.addEventListener('click', function () {

        var pergunta = perguntasT[indicePerguntaAtual].id;
        var resposta = botao.value;
        console.log(resposta, pergunta);
        respostas[pergunta] = resposta;
        avancarPergunta();
    });
});

function avancarPergunta() {

    var indiceProximaPergunta = indicePerguntaAtual + 1;
    console.log(respostas);

    if (Object.keys(respostas).length === perguntasT.length) {
        pergunta.style.display = 'none'
        btn_cancelar.style.display = 'none'
        contador.innerHTML = "......"
        botaoEsquerda.disabled = true
        botaoDireita.disabled = true
        btn_voltar.style.display = 'flex'
        if (Object.values(respostas).includes("false")) {
            resultado_NA.style.display = 'flex'
            Object.keys(respostas).forEach((id) => {
                if (respostas[id] === 'false') {
                    req_NA.appendChild(li(id - 1)); // Subtrai 1 do perguntaId para corresponder ao índice da pergunta
                }
            });
            document.querySelector('.obs').style.display = 'flex'
        } else {
            resultado_A.style.display = 'flex'
        }
    }

    if (indiceProximaPergunta < perguntasT.length) {
        exibirPergunta(indiceProximaPergunta)
    }

    console.log(Object.keys(respostas).length, perguntasT.length);


}

function li(index) {
    const li = document.createElement('li')
    li.innerHTML = `${perguntasT[index].resposta}`
    
    return li
}

exibirPergunta(0);
