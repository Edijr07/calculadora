const nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
const saldoRank = calcularVitorias(105, 30);

function calcularVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

let nivel = 0;

if (saldoRank <= 10) {
    nivel = 0;
} else if (saldoRank <= 20) {
    nivel = 1;
} else if (saldoRank <= 50) {
    nivel = 2;
} else if (saldoRank <= 80) {
    nivel = 3;
} else if (saldoRank <= 90) {
    nivel = 4;
} else if (saldoRank <= 100) {
    nivel = 5;
} else {
    nivel = 6;
}

console.log(`O Herói tem o saldo de ${saldoRank} vitórias e está no nível ${nivelHeroi[nivel]}`);