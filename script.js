console.log("teste do js");

function calculaIMC() {
  let peso, altura, resp, classificacao;
  peso = parseFloat(document.getElementById("edtPeso").value);
  altura = parseFloat(document.getElementById("edtAltura").value);

  resp = peso / (altura * altura);
  if (
    document.getElementById("edtPeso").value == "" ||
    document.getElementById("edtAltura").value == ""
  ) {
    classificacao = "Insira todos os dados";
  } else if (peso < 0) {
    classificacao = "O peso não pode ser negativo";
  } else if (altura < 0) {
    classificacao = "A altura não pode ser negativa";
  } else if (resp <= 18.5) {
    classificacao = " abaixo do peso";
  } else if (resp <= 24.9) {
    classificacao = " peso ideal";
  } else if (resp <= 29.9) {
    classificacao = " levemente acima do peso";
  } else {
    classificacao = "Vish!!!";
  }

  document.getElementById("resp").innerText =
    "O seu IMC é: " +
    resp +
    " a sua classificação é a seguinte:" +
    classificacao;
}
