// dichiarare le variabili globali
// visibili globalmente
var nemici;
var campo;
var comunicazioni;
var naviAffondate;
var colpiSparati;
var colpiDisponibili;

// icone da usare
var icona = "&#x1F333;";
var iconaPiena = "&#x1F4A5;";
var iconaVuota = "&nbsp;";

// funzioni generali di gioco
function IniziaBattaglia(righe, colonne){
	// caricare i nemici
	CaricaNemici(righe, colonne);
	// resettare i contatori e collegare il DOM (document object model)
	ResettaContatori(50);
	// creare le interfacce grafiche
	CostruisciCampo(righe, colonne);
}

function CaricaNemici(righe, colonne){
	nemici = [];
	for(let y=0; y < righe; y++){
		let riga = [];
		for(let x=0; x < colonne; x++){
			riga[x] = parseInt(Math.random() * 2);
		}
		nemici[y] = riga;
	}
	return nemici;
}

function ResettaContatori(colpi){
	campo = document.getElementById("battaglia");
	comunicazioni = document.getElementById("comunicazioni");
	naviAffondate = 0;
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

function ClickSuCella(){
	
}