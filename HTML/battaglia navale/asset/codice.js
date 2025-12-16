// dichiarare le variabili globali
// visibili globalmente
var nemici;
var campo;
var comunicazioni;
var nemiciColpiti;
var nemiciPresenti;
var colpiSparati;
var colpiDisponibili;
var inGame = false;

// icone da usare
var icona = "&#x1F333;";
var iconaPiena = "&#x1F4A5;";
var iconaVuota = "&nbsp;";

// funzioni generali di gioco
function IniziaBattaglia(righe, colonne){
	inGame = true;
	// caricare i nemici
	CaricaNemici(righe, colonne);
	// resettare i contatori e collegare il DOM (document object model)
	ResettaContatori(50);
	// creare le interfacce grafiche
	CostruisciCampo(righe, colonne);
}

function CaricaNemici(righe, colonne){
	nemici = [];
	nemiciPresenti = 0;
	for(let y=0; y < righe; y++){
		let riga = [];
		for(let x=0; x < colonne; x++){
			riga[x] = parseInt(Math.random() * 2);
			if(riga[x] == 1)
				nemiciPresenti++;
		}
		nemici[y] = riga;
	}
	return nemici;
}

function ResettaContatori(colpi){
	campo = document.getElementById("battaglia");
	comunicazioni = document.getElementById("comunicazioni");
	nemiciColpiti = 0;
	colpiSparati = 0;
	colpiDisponibili = colpi;
	comunicazioni.innerHTML = "Hai a disposizione <b>" + 
								colpiDisponibili + 
								"</b> colpi!";
}

function CostruisciCampo(righe, colonne){
	// elimino eventuali campi precedenti
	campo.innerHTML = "";
	for(let y=0; y < righe; y++){
		// creo la riga
		let riga = document.createElement("tr");
		// la popolo
		for(let x=0; x < colonne; x++){
			// creo la cella
			let cella = document.createElement("td");
			// la valorizzo
			cella.innerHTML = icona;
			cella.dataset["x"] = x;
			cella.dataset["y"] = y;
			cella.onclick = ClickSuCella;
			// e la aggiungo alla riga
			riga.appendChild(cella);
		}
		
		// appendo la riga come figlia della tabella
		campo.appendChild(riga);
	}
}

function ClickSuCella(evento){
	if(inGame){
		colpiSparati++;
		let cella = evento.srcElement;
		let x = cella.dataset["x"];
		let y = cella.dataset["y"];
		if(nemici[y][x] == 1){
			nemiciColpiti++;
			cella.innerHTML = iconaPiena;
			comunicazioni.innerHTML = "Colpito!<br>"
		} else {
			cella.innerHTML = iconaVuota;
			comunicazioni.innerHTML = "Mancato, era vicino ma nulla...<br>";
		}
										
		var colpiRimasti = colpiDisponibili - colpiSparati;
		var nemiciRimasti = nemiciPresenti - nemiciColpiti;
		
		comunicazioni.innerHTML += " Ti mancano ancora <b>" + 
										nemiciRimasti + 
										"</b> nemici da trovare e <b>"+ 
										colpiRimasti + 
										"</b> colpi!";
		
		if(nemiciRimasti > colpiRimasti){
			comunicazioni.innerHTML = "Mi dispiace... ...purtroppo abbiamo perso...";
			inGame = false;
		}
		else if(nemiciRimasti < 1){
			comunicazioni.innerHTML = "Abbiamo vinto!";
			inGame = false;
		}
	} else {
		let nuova = confirm("La partita è finita, vuoi iniziarne un'altra?");
		if(nuova)
			IniziaBattaglia(8,8);
	}
}