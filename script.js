function calcular() {
    let numero1 = parseInt(document.getElementsById('input1')).value;
    let numero2 = parseInt(document.getElementsById('input2')).value;

    let soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

    console.log(soma)

    document.getElementById("soma").innerHTML = soma;
    document.getElementById('subtracao').innerHTML = subtracao;
    document.getElementById('multiplicacao').innerHTML = multiplicacao;
    document.getElementById('divisao').innerHTML = divisao;
}