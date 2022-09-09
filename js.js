/* Exercício 1
var valor1 = parseInt(prompt("Insira o primeiro valor"));
var valor2 = parseInt(prompt("Insira o segundo valor (OBS: Esse valor deve ser maior que 0)"));


while(valor2 <= 0){
    valor2 = parseInt(prompt("Por favor, tente novamente. O valor inserido não pode ser igual a 0 ou negativo."));
} 

var divisão = valor1 / valor2
document.write(divisão); */


/* Exercício 2
var contagem = 30;

while (contagem > 0) {
    var texto = "Contagem em " + contagem + "<br>";
    document.write(texto);
    contagem = contagem - 1;
}  

document.write("EXPLOSÂO");  */

/* Exercício 3
var contagem = 10;

while (contagem > 0) {
    if (contagem == 1) {
        document.write("1")
    } else {
        var texto =  contagem + ", ";
        document.write(texto);
    }
    contagem = contagem - 1;
}  */

/* Exercício 4
var acumuladora = 0;
var contagem = 15;

while (contagem <=100) {
      acumuladora += contagem 
      contagem = contagem + 1;  
}

var media = acumuladora / 85;
document.write(media); */

/* Exercício 5
var valor1 = parseInt(prompt("Insira o primeiro valor"));
var valor2 = parseInt(prompt("Insira o segundo valor"));
var fator = valor2 - valor1;

var acumuladora = 0;
while(valor1 < valor2){
    acumuladora += valor1;
    valor1++;
}

document.write(acumuladora / fator);
*/

/* Exercício 6
var nota1 = parseInt(prompt("Insira a primeira nota do aluno"));
var nota2 = parseInt(prompt("Insira a segunda nota do aluno"));
var media = (nota1 + nota2) / 2; 
var acumuladora = 0;

if(media >= 9.5){
    alert("O aluno foi aprovado.");
    acumuladora++
} else{
    alert("O aluno foi reprovado.");
}

var continuar = (prompt("Calcular a média de outro aluno Sim/Não? \n Digite: S (se sim) ou N (se não)"));
while(continuar == "S"){
var nota1 = parseInt(prompt("Insira a primeira nota do aluno"));
var nota2 = parseInt(prompt("Insira a segunda nota do aluno"));
var media = (nota1 + nota2) / 2; 

if(media >= 9.5){
    alert("O aluno foi aprovado.");
    acumuladora++
} else{
    alert("O aluno foi reprovado.");
}

var continuar = (prompt("Calcular a média de outro aluno Sim/Não? \n Digite: S (se sim) ou N (se não)"));
} 

if (continuar == "N"){
alert(acumuladora);
} */

/* Exercício 7
var nota1 = parseInt(prompt("Insira a primeira nota do aluno"));
var nota2 = parseInt(prompt("Insira a segunda nota do aluno"));
var nota3 = parseInt(prompt("Insira a terceira nota do aluno"));
var nota4 = parseInt(prompt("Insira a quarta nota do aluno"));
var nota5 = parseInt(prompt("Insira a quinta nota do aluno"));
var nota6 = parseInt(prompt("Insira a sexta nota do aluno"));



while(nota1 < 0 || nota1 > 10){
    var nota1 = parseInt(prompt("Insira a primeira nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 
while(nota2 < 0 || nota2 > 10){
    var nota2 = parseInt(prompt("Insira a segunda nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 
while(nota3 < 0 || nota3 > 10){
    var nota3 = parseInt(prompt("Insira a terceira nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 
while(nota4 < 0 || nota4 > 10){
    var nota4 = parseInt(prompt("Insira a quarta nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 
while(nota5 < 0 || nota5 > 10){
    var nota5 = parseInt(prompt("Insira a quinta nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 
while(nota6 < 0 || nota6 > 10){
    var nota6 = parseInt(prompt("Insira a sexta nota do aluno novamente, o valor inserido deve ser entre 0 e 10."));
} 

var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;

alert("A média desse aluno é: " + media); */

/* Exercício 8
var n = parseInt(prompt("Insira um valor"));
var v1 = 1;
var fator = n - v1

while(v1 <= n){
    document.write(v1 + "<br>");
    v1++
} */

/* Exercício 9
var inicial = 100
var final = 110

while(inicial < final){
    inicial++
    document.write(inicial + "<br>");
} */

/* Exercício 10
var n = parseInt(prompt("Insira um valor"));
var inicial = 0 


while(inicial < n){
    inicial++

    var final = 0
    while(final < 10){
        final++
    
    var multiplicando = inicial * final
    document.write(inicial + " X " + final + " " + "=" + " " + multiplicando + "<br>" + "<br>")
}
} */

/* Exercício 11
var dentro = 0;
var fora = 0;
var i = 0;
while(i < 10){
    
    var n = parseInt(prompt("Insira um valor"));
    if(n < 42 && n > 24){
        dentro++
    } else {
        fora++
    }
    i++
} 
document.write(dentro + " valores estão entre 24 e 42. E " + fora + " valores não estão."); */