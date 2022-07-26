
/*
    1 2 3
    4 5 6
    7 8 9
*/

let forma = 'X';
let formas = ['X','O'];
let jogadorAtual;

let jogo = document.querySelector("#game");
//console.log(jogo);

jogo.addEventListener("click", function(event){
   console.log(event.target);   
});