document.addEventListener("DOMContentLoaded", function () {
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
    const cartoes = document.querySelectorAll(".cartao");
  
    let cartaoAtual = 0;
  
    // Função para avançar o cartão
    function avancarCartao() {
      if (cartaoAtual === cartoes.length - 1) return; // Impede de passar do último cartão
  
      cartoes[cartaoAtual].classList.remove("selecionado");
      cartaoAtual++;
      cartoes[cartaoAtual].classList.add("selecionado");
    }
  
    // Função para voltar o cartão
    function voltarCartao() {
      if (cartaoAtual === 0) return; // Impede de voltar antes do primeiro cartão
  
      cartoes[cartaoAtual].classList.remove("selecionado");
      cartaoAtual--;
      cartoes[cartaoAtual].classList.add("selecionado");
    }
  
    // Adiciona eventos aos botões
    btnAvancar.addEventListener("click", avancarCartao);
    btnVoltar.addEventListener("click", voltarCartao);
  });
  