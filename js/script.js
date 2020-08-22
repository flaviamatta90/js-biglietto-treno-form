var bottoneGenera = document.getElementById('genera');

bottoneGenera.addEventListener("click",
  function(){
    // 1 nome nell'input
    var nome = document.getElementById('nome').value;
    console.log(nome);
    // 2 km negli input
    var km = document.getElementById('km').value;
    console.log(km);
    // 3 Fascia età
    var fasciaEtà = document.getElementById('fascia-età').value;
    console.log(fasciaEtà);
    // 4 Totale bigletto
    var prezzoKm = 0.21;
    var totale = prezzoKm * km;
    var tipoOfferta = "Biglietto Standard";
    console.log(totale);

    // 5 se la fascia d'età è minorenne applico o sconto del 20%;
    // se la fascia d'età è over65 applico o sconto del 40%

    if (fasciaEtà == 'minorenne') {
      totale = totale - ((totale * 20) / 100);
      tipoOfferta = "Sconto Minorenne";
    } else if (fasciaEtà == "over65")
    {
      totale = totale - ((totale * 40) / 100);
      tipoOfferta = "Sconto Silver";
    }

    // 6 Arrotondo i decimali
    totale = totale.toFixed(2);

    // 7 Genero i numeri random

    var numCarrozza = Math.floor(Math.random() * 10);
    var codiceCp = Math.floor(Math.random() * 1000) + 90000;

    // 8 Stampo il biglietto
    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("offerta").innerHTML = tipoOfferta;
    document.getElementById("carrozza").innerHTML = numCarrozza;
    document.getElementById("codice-cp").innerHTML = codiceCp;
    document.getElementById("costo").innerHTML = totale + "€" ;

    document.getElementById("biglietto").classList.add("show");
  }
);

// Annulla
var bottoneAnnulla = document.getElementById("annulla");
bottoneAnnulla.addEventListener("click",
  function() {
    document.getElementById("biglietto").classList.remove("show");

  }
)
