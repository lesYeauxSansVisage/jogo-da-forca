class Forca {
  palavraSecreta = "";

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta.toLowerCase();
    this.dados.palavra = "_".repeat(palavraSecreta.length).split("");
  }

  dados = {
    letrasChutadas: [],
    vidas: 6,
    palavra: [],
  };

  chutar(letra) {
    letra = letra.toLowerCase();

    if (this.validarChute(letra)) {
      
      this.dados.letrasChutadas.push(letra);

      if (this.palavraSecreta.includes(letra)) {
        this.preencherLetras(letra);
      } else {
        this.dados.vidas -= 1;
      }
    }
  }

  validarChute(chute) {
    return (
      chute.length === 1 &&
      !this.dados.letrasChutadas.includes(chute) &&
      /[a-zA-Z]/.test(chute)
    );
  }

  preencherLetras(letra) {
    const palavraSecretaArray = this.palavraSecreta.split("");

    for (let i = 0; i < palavraSecretaArray.length; i++) {
      if (letra === palavraSecretaArray[i]) {
        this.dados.palavra[i] = letra;
      }
    }
  }

  buscarEstado() {
    if (this.dados.vidas === 0) {
      return "perdeu";
    }

    if (
      this.dados.palavra.join("") === this.palavraSecreta &&
      this.dados.vidas > 0
    ) {
      return "ganhou";
    }

    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.dados.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.dados.vidas, // Quantidade de vidas restantes
      palavra: this.dados.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
