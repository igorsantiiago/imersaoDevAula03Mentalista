var limiteTentativas = 3;
var tentativas = 1;
var numeroSecreto = Math.round(Math.random() * 10);

function chutar() {

    var resultado = document.getElementById('resultado');
    var limite = document.getElementById("limite");

    var chute = parseInt(document.getElementById("valor").value);

        if (chute == numeroSecreto) {
            resultado.innerHTML = "Você acertou! Você concluiu o desafios após " +  tentativas + " tentativas";
            limite.innerHTML = "";
            configFimDeJogo();
        } else if (chute < 0 || chute > 10) {
            resultado.innerHTML = "Número inválido. Insira um número de 0 a 10";
        } else {
            limiteTentativas--;
            if (chute < numeroSecreto) {
                resultado.innerHTML = "Você errou! O número é maior do que você digitou";
                limite.innerHTML = "Você ainda tem: " + limiteTentativas + " tentativas.";
            } else if (chute > numeroSecreto) {
                resultado.innerHTML = "Você errou! O número é menor do que você digitou.";
                limite.innerHTML = "Você ainda tem: " + limiteTentativas + " tentativas.";
            }
            
            tentativas++;
        }
        console.log(numeroSecreto);
        if (limiteTentativas == 0) {
            resultado.innerHTML = "Acabaram suas tentativas. O número correto é: " + numeroSecreto;
            limite.innerHTML = "";
            configFimDeJogo();
        }
}

function configFimDeJogo() {
    valor.disabled = true;
    botao.disabled = true;
}

function reiniciar() {
    limiteTentativas = 3;
    tentativas = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    valor.disabled = false;
    botao.disabled = false;
    valor.value = '';
    valor.focus();
    resultado.innerHTML = "";
  
    numeroSecreto = Math.round(Math.random() * 10);
}

