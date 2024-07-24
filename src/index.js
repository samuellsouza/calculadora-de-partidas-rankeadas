function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calcularSaldoENivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = calcularNivel(vitorias);
    return { saldoVitorias, nivel };
}

function exibirResultado(vitorias, derrotas) {
    const { saldoVitorias, nivel } = calcularSaldoENivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso
const vitorias = parseInt(prompt("Digite o número de vitórias: "));
const derrotas = parseInt(prompt("Digite o número de derrotas: "));
exibirResultado(vitorias, derrotas);
