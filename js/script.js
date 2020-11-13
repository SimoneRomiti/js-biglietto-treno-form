
var genera = document.getElementById("genera");
var nome;
var numeroKm;
var eta;
var numeroCasualeCarrozza;

genera.addEventListener("click",
function(){

  nome = document.getElementById("input-name").value;
  console.log(nome);

  numeroKm = document.getElementById("input-km").value;
  console.log(numeroKm);

  eta = document.getElementById("age").value;
  console.log(eta);

  document.getElementById("passenger").innerHTML = nome;

  if(eta == "Minorenne" || eta == "Over65"){
    document.getElementById("discount").innerHTML = "Sconto " + eta;
  } else{
    document.getElementById("discount").innerHTML = "Prezzo standard";
  }

  numeroCasualeCarrozza = Math.floor(Math.random() * 9 + 1);
  console.log(numeroCasualeCarrozza);

  document.getElementById("carriage-number").innerHTML = numeroCasualeCarrozza;




}
);




// // CONTROLLO KILOMETRI
// while(numeroKm <= 0 || isNaN(numeroKm)) {
//   numeroKm = parseInt(prompt("Il numero dei Kilometri deve essere un numero maggiore di 0, inserisci il numero corretto dei kilometri"));
// }
// console.log(numeroKm);
//
// // INPUT ETA'
// var anni = parseInt(prompt("Quanti anni hai?"));
// // CONTROLLO ETA'
// while(anni <= 0 || isNaN(anni)) {
//   anni = parseInt(prompt("L'età deve essere un numero maggiore di zero, inserisci correttamente la tua età"))
// }
// console.log(anni);
//
// // PREZZO SENZA SCONTO
// var prezzoSenzaSconto = numeroKm * 0.21;
// console.log(prezzoSenzaSconto);
//
// // PREZZO CON SCONTI VARI
// var prezzoFinale;
//
// if(anni < 18) {
//   prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 20) / 100);
// } else if(anni > 65) {
//   prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 40) / 100);
// } else {
//   prezzoFinale = prezzoSenzaSconto;
// }
// console.log(prezzoFinale);
//
// // STAMPA A VIDEO RISULTATO
// document.getElementById('text').innerHTML = "Il prezzo del tuo biglietto è: ";
//
// document.getElementById('number').innerHTML = prezzoFinale.toFixed(2) + "€";
