const perguntasT = [
    "Você está em boas condições de saúde?",
    "Você pesa mais que 50 quilos?",
    "Você tem entre 16 e 69 anos de idade? (Permitida doação a partir de 16 anos se acompanhado de responsável legal à cada doação)",
    "Você teve alguma vacinação recente?",
    "Você tem algum piercing na língua ou genital?",
    "Você tem alguma tatuagem, maquiagem definitiva feita nos ultimos 12 meses?",
    "Você teve algum sintoma de gripe nos últimos 15 dias?",
    "Você está grávida ou amamentanto?",
    "Você fez alguma cirurgia específica? (isso será avaliado na entrevista)",
    "Você tem DST ou situações nas quais há maior risco de adquirir DST? (aguardar 12 meses)",
    "Você faz uso de algum medicamento? (Isso será avaliado na entrevista)",
    "Você teve hepatite após os 11 anos de idade?"
];

const respostasCorretas = [
    "sim", // Resposta correta para a primeira pergunta
    "sim", // Resposta correta para a segunda pergunta
    "sim", // Resposta correta para a terceira pergunta
    "sim", // Resposta correta para a quarta pergunta
    "não", // Resposta correta para a quinta pergunta
    "não", // Resposta correta para a sexta pergunta
    "não", // Resposta correta para a sétima pergunta
    "não", // Resposta correta para a oitava pergunta
    "não", // Resposta correta para a nona pergunta
    "não", // Resposta correta para a décima pergunta
    "não", // Resposta correta para a décima primeira pergunta
    "não"  // Resposta correta para a décima segunda pergunta
];

const perguntasERespostasCorretas = perguntasT.map((pergunta, index) => ({
    pergunta,
    respostaCorreta: respostasCorretas[index]
}));

console.log(perguntasERespostasCorretas);
