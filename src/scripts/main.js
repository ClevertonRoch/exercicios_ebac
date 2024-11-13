
function somar(a, b) {
    return a + b;
}

function ePar(numero) {
    return numero % 2 === 0;
}

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function ePalindromo(str) {
    const tamanho = str.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (str[i] !== str[tamanho - i - 1]) {
            return false;
        }
    }
    return true;
}

function getDataFormatada() {
    const agora = new Date();
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

console.log("A soma de 2 e 3 é:", somar(2, 3));
console.log("O número 4 é par?", ePar(4));
console.log("O fatorial de 5 é:", fatorial(5));
console.log("A string 'olá' em maiúsculas é:", toUpperCase('olá'));
console.log("A string 'radar' é um palíndromo?", ePalindromo('radar'));
console.log("A data atual formatada é:", getDataFormatada());
