

const prezzoKilometro = 0.21;
console.log("Il prezzo per Kilometro è: " + prezzoKilometro);

document.getElementById ("prezzo-per-kilometro").innerHTML = prezzoKilometro ;


let kilometriDaPercorrere = parseInt (prompt ("Inserire i Kilometri di viaggio da percorrere") ) ;
console.log("Kilometri da percorrere: " + kilometriDaPercorrere);

document.getElementById ("kilometri-da-percorrere").innerHTML = kilometriDaPercorrere ;

let prezzoBigliettoPerKilometri = parseInt (prezzoKilometro * kilometriDaPercorrere)
console.log("Prezzo pieno del biglietto:" + prezzoBigliettoPerKilometri)

document.getElementById ("prezzo-biglietto-per-kilometri").innerHTML = prezzoBigliettoPerKilometri ;

let età = parseInt (prompt ("Inserire l'età del passeggero") ) ;
console.log("Età passeggero: " + età);

let scontoVenti = ((prezzoBigliettoPerKilometri * 20) / 100);
console.log("Sconto 20%: " + scontoVenti);

let scontoQuaranta = ((prezzoBigliettoPerKilometri * 40) / 100);
console.log("Sconto 40%: " + scontoQuaranta);


if (isNaN(età) || isNaN(kilometriDaPercorrere)) {
    alert ("Per favore inserire solo valori numerici!")
}


if ( età < 18 )  {
    document.getElementById ("sconto-applicato").innerHTML = scontoVenti ;
    document.getElementById ("età").innerHTML = età + " anni (Sconto 20%)" ;
    document.getElementById ("prezzo-biglietto").innerHTML = (prezzoBigliettoPerKilometri - scontoVenti) ;
} else if (età > 65) {
    document.getElementById ("sconto-applicato").innerHTML = scontoQuaranta ;
    document.getElementById ("età").innerHTML = età + " anni (Sconto 40%)" ;
    document.getElementById ("prezzo-biglietto").innerHTML = (prezzoBigliettoPerKilometri - scontoQuaranta) ;
} else {
    document.getElementById ("sconto-applicato").innerHTML = 0 ;
    document.getElementById ("età").innerHTML = età + " anni (Nessuno Sconto)" ;
    document.getElementById ("prezzo-biglietto").innerHTML = prezzoBigliettoPerKilometri ;
}