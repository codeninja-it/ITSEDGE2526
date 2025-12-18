// variabili globali
var txtDescrizione;
var numStato;
var btnAggiungi;
var tabTarget;

function InizializzaPostIt(idTesto, idStato, idBottone, idTarget){
	// aggancio gli elementi del DOM per usarli in futuro
	// sia per i campi di input
	txtDescrizione = document.getElementById(idTesto);
	numStato = document.getElementById(idStato);
	// che per le zone di output
	tabTarget = document.getElementById(idTarget);
	// prendendo il pulsante da usare come attivatore
	btnAggiungi = document.getElementById(idBottone);
	btnAggiungi.onclick = CreaPostIt;
}

function CreaPostIt(){
	var nuovaRiga = document.createElement("tr");
		nuovaRiga.innerHTML = txtDescrizione.value;
	tabTarget.appendChild(nuovaRiga);
}