

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
let sconto;
let etàSconto;
let prezzoTotale;

if ( età < 18 )  {
    sconto = scontoVenti.toFixed(2);
    etàSconto = età + " anni (Sconto 20%)" ;
    prezzoTotale = (prezzoBigliettoPerKilometri - scontoVenti).toFixed(2);
    
} else if (età > 65) {
    sconto = scontoQuaranta.toFixed(2) ;
    etàSconto = età + " anni (Sconto 40%)" ;
    prezzoTotale = (prezzoBigliettoPerKilometri - scontoQuaranta).toFixed(2);
    
} else {
    sconto = 0 ;
    etàSconto = età + " anni (Nessuno Sconto)" ;
    prezzoTotale = prezzoBigliettoPerKilometri.toFixed(2);
    
}

document.getElementById ("sconto-applicato").innerHTML = sconto;
document.getElementById ("età").innerHTML = etàSconto;
document.getElementById ("prezzo-biglietto").innerHTML = prezzoTotale;