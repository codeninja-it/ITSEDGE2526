// ricetta del risolutore di labirinti
class Risolutore {
	constructor(idTabella, idPulsante, larghezza, altezza){
		// aggancio i due elementi nel presentation tier
		this.tabella = document.getElementById(idTabella);
		this.pulsante = document.getElementById(idPulsante);
		// aggancio le dimensioni che avrà il labirinto
		this.larghezza = larghezza;
		this.altezza = altezza;
		// mi segno le icone da usare
		this.iconaVuoto = "&nbsp;";
		this.iconaMuro = "🧱";
		this.iconaInizio = "🚎";
		this.iconaFine = "🚧";
		// e preparo la tabella
		this.PreparaTabella();
		
	}
	
	PreparaTabella(){
		// svuoto la tabella
		this.tabella.innerHTML = "";
		this.celle = [];
		// resetto l'inizio e la fine
		this.inizio = undefined;
		this.fine = undefined;
		// e per ogni riga
		for(let y=0; y < this.altezza; y++){
			// la creo
			let riga = document.createElement("tr");
			let rigaDati = [];
			// e per ogni cella
			for(let x=0; x < this.larghezza; x++){
				// la creo
				let cella = document.createElement("td");
				cella.innerHTML = this.iconaVuoto;
				rigaDati[x] = true;
				// ne attivo i triggers
				cella.addEventListener("click", this.Cambia.bind(this));
				// facendo però in modo che la cella sappia chi è
				cella.dataset["x"] = x;
				cella.dataset["y"] = y;
				// e la inserisco in riga
				riga.appendChild(cella);
			}
			// e appendo la nuova riga
			this.tabella.appendChild(riga);
			this.celle[y] = rigaDati;
		}
	}
	
	Cambia(evento){
		// recupero le coordinate
		let x = parseInt(evento.target.dataset["x"]);
		let y = parseInt(evento.target.dataset["y"]);
		// e controllo se vuole impostare lo start
		if(evento.shiftKey){
			// resetto la precedente
			if(this.inizio != undefined){
				for(let i=0; i < this.tabella.childNodes.length; i++)
					for(let j=0; j < this.tabella.childNodes[i].childNodes.length; j++)
						if(this.tabella.childNodes[i].childNodes[j].innerHTML == this.iconaInizio)
							this.tabella.childNodes[i].childNodes[j].innerHTML = this.iconaVuoto;
			}
			// imposto l'attuale
			evento.target.innerHTML = this.iconaInizio;
			this.inizio = [y, x];
		} else if (evento.ctrlKey){
			// resetto la precedente
			if(this.fine != undefined){
				for(let i = 0; i < this.tabella.childNodes.length; i++)
					for(let j = 0; j < this.tabella.childNodes[i].childNodes.length; j++)
						if(this.tabella.childNodes[i].childNodes[j].innerHTML == this.iconaFine)
							this.tabella.childNodes[i].childNodes[j].innerHTML = this.iconaVuoto;
			}
			// ed imposto la nuova cella
			evento.target.innerHTML = this.iconaFine;
			this.fine = [y, x];
		} else {
			// e con quelle controllo il suo stato precedente per impostare l'attuale
			this.celle[y][x] = !this.celle[y][x];
			// ed aggiorno la grafica per il mio utente
			if(this.celle[y][x])
				evento.target.innerHTML = this.iconaVuoto;
			else
				evento.target.innerHTML = this.iconaMuro;
		}
	}
}