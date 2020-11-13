
var genera = document.getElementById("genera");
var nome;
var numeroKm;
var eta;
var numeroCasualeCarrozza;
var codice;
var prezzoSenzaSconto;
var prezzoFinale;

genera.addEventListener("click",
function(){

  // RACCOLTA INPUT
  nome = document.getElementById("input-name").value;
  console.log(nome);

  numeroKm = document.getElementById("input-km").value;
  console.log(numeroKm);

  eta = document.getElementById("age").value;
  console.log(eta);

  // SCRITTURA NOME
  document.getElementById("passenger").innerHTML = nome;

  // SCRITTURA SCONTO
  if(eta == "Minorenne" || eta == "Over65"){
    document.getElementById("discount").innerHTML = "Sconto " + eta;
  } else{
    document.getElementById("discount").innerHTML = "Prezzo standard";
  }

  // NUMERO CARROZZA
  numeroCasualeCarrozza = Math.floor(Math.random() * 9 + 1);
  console.log(numeroCasualeCarrozza);

  document.getElementById("carriage-number").innerHTML = numeroCasualeCarrozza;

  // CODICE
  codice = Math.floor(Math.random() * 10000 + 90000);
  console.log(codice);

  document.getElementById("code-number").innerHTML = codice;

  // PREZZO
  prezzoSenzaSconto = numeroKm * 0.21;
  console.log(prezzoSenzaSconto);

  if(eta == "Minorenne"){
    prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 20) / 100);
  }else if(eta == "Over65"){
    prezzoFinale = prezzoSenzaSconto - ((prezzoSenzaSconto * 40) / 100);
  } else{
    prezzoFinale = prezzoSenzaSconto;
  }
  prezzoFinale = prezzoFinale.toFixed(2);
  console.log(prezzoFinale);

  document.getElementById("price").innerHTML = prezzoFinale + "€";
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
