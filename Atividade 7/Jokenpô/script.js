function jogar() {
  escolhaJogador = prompt("Escolha uma opção: \n1-Pedra \n2-Papel \n3-Tesoura\n\n0-Sair do jogo");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  while (escolhaJogador != 0) 
  {
    if (escolhaJogador == escolhaComputador) //CASOS DE EMPATE:
    {
      alert("Empate! A escolha do computador foi: " + escolhaComputador);
    }

    if (escolhaJogador == 1) //CASOS DE PEDRA:
    {
      if (escolhaComputador == 2) 
      {
        alert("Computador venceu! A escolha do computador foi: " + escolhaComputador);
      }

      if (escolhaComputador == 3) 
      {
        alert("Você venceu! A escolha do computador foi: " + escolhaComputador);
      }
      
    }

    if (escolhaJogador == 2) //CASOS DE PAPEL:
    {
      if (escolhaComputador == 1) 
      {
        alert("Você venceu! A escolha do computador foi: " + escolhaComputador);
      }

      if (escolhaComputador == 3) 
      {
        alert("Computador venceu! A escolha do computador foi: " + escolhaComputador);
      }
      
    }

    if (escolhaJogador == 3) //CASOS DE TESOURA:
    {
      if (escolhaComputador == 1) 
      {
        alert("Computador venceu! A escolha do computador foi: " + escolhaComputador);
      }

      if (escolhaComputador == 2) 
      {
        alert("Você venceu! A escolha do computador foi: " + escolhaComputador);
      }
      
    }
    escolhaJogador = prompt("Escolha uma opção: \n1-Pedra \n2-Papel \n3-Tesoura\n\n0-Sair do jogo");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
  } 
}