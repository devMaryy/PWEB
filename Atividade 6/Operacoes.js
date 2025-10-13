function resultado() {
   
    let n1 = parseFloat(document.getElementById("numPri").value);
    let n2 = parseFloat(document.getElementById("numSeg").value);
 
   
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, preencha os dois números antes de continuar.");
        return;
    }
 
    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let produto = n1 * n2;
    let divisao = n2 !== 0 ? (n1 / n2) : "Não é possível dividir por zero";
    let resto = n2 !== 0 ? (n1 % n2) : "—";
 
    // Mostra os resultados nos spans
    document.getElementById("soma").textContent = soma;
    document.getElementById("sub").textContent = subtracao;
    document.getElementById("mult").textContent = produto;
    document.getElementById("div").textContent = divisao;
    document.getElementById("resto").textContent = resto;
}