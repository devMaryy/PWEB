// 1) Receber três números e retornar o maior deles:
function calcularMaior() {
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let n3 = Number(document.getElementById('num3').value);

    let maior = Math.max(n1, n2, n3);
    alert("O maior número é: " + maior);
}

// 2) Receber três números e retorná-los em ordem crescente:
function ordemCrescente() {
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let n3 = Number(document.getElementById('num3').value);

    let ordenados = [n1, n2, n3].sort((a, b) => a - b);
    alert("Números em ordem crescente: " + ordenados.join(", "));
}

// 3) Receber uma string e verificar se é palíndromo:
function ehPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:");
    if (!texto) return;

    let maiusculo = texto.toUpperCase().replace(/\s+/g, '');
    let invertido = maiusculo.split('').reverse().join('');

    if (maiusculo === invertido) {
        alert(`"${texto}" é um palíndromo!`);
    } else {
        alert(`"${texto}" NÃO é um palíndromo.`);
    }
}

// 4) Verificar se os valores formam um triângulo e qual o tipo do triâgulo:
function ehTriangulo() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = Number(document.getElementById('num3').value);

    if (a <= 0 || b <= 0 || c <= 0) {
        alert("Os valores devem ser positivos.");
        return;
    }

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            alert("Os valores formam um triângulo EQUILÁTERO.");
        } else if (a === b || a === c || b === c) {
            alert("Os valores formam um triângulo ISÓSCELES.");
        } else {
            alert("Os valores formam um triângulo ESCALENO.");
        }
    } else {
        alert("Os valores NÃO formam um triângulo.");
    }
}
