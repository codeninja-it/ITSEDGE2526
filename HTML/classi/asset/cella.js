// ricetta della singola cella
class Cella {
	constructor(raccoglitore, target, x, y, tempo){
		// per prima cosa mi segno nel raccoglitore
		this.Tabella = raccoglitore;
		// per seconda cosa mi ricordo dove mi trovo
		this.X = x;
		this.Y = y;
		// variabili globali del nostro oggetto
		this.virus = false; // null
		
		this.tag = document.createElement("td");
		target.appendChild(this.tag);
		this.tag.dataset["x"] = x;
		this.tag.dataset["y"] = y;
		
		// setting dell'interfaccia utente
		this.tag.classList.add("cella");
		
		setInterval(this.Aggiorna.bind(this), tempo);
		// la cella se cliccata permetterà all'utente
		// di impostare se contiene il virus oppure no
		this.tag.addEventListener("click", this.Imposta.bind(this) );
	}
	
	// gestisce l'interazione dell'utente
	Imposta(evt){
		if(evt.shiftKey){
			this.virus = null;
		} else {
			// cambio lo stato della cella
			this.virus = !this.virus;
		}
		this.tag.classList.remove("virus");
		this.tag.classList.remove("muro");
		if(this.virus)
			this.tag.classList.add("virus");
		else if(this.virus == null)
			this.tag.classList.add("muro");
	}
	
	// deve controllare lo stato della cella
	Aggiorna(){
		if(this.Tabella.controllo && this.virus != null){
			// conto i vicini di casa
			let vicini = 0;
			for(let x = -1; x < 2; x++){
				for(let y = -1; y < 2; y++){
					let aX = this.X + x;
					let aY = this.Y + y;
					// se non sono io
					if(aX != this.X || aY != this.Y){
						// se la cella esiste
						if(this.Tabella.griglia[aX] != undefined && this.Tabella.griglia[aX][aY] != undefined){
							// se ha il virus
							if(this.Tabella.griglia[aX][aY].virus){
								vicini++;
							}
						}
					}
				}
			}
			// per controllo riport il numero di vicini nella cella html
			this.tag.dataset["vicini"] = vicini;
			
			// ora che sò quanti vicini ci sono
			// posso stabilire la condizione successiva
			if(vicini < 2 && this.virus){
				this.virus = false;
			} else if (vicini < 4 && this.virus){
				this.virus = true;
			} else if(this.virus) {
				this.virus = false;
			}
			if(!this.virus && vicini == 3){
				this.virus = true;
			}
			// aggiorno la visualizzazione per l'utente
			if(this.virus){
				this.tag.classList.add("virus");
			} else {
				this.tag.classList.remove("virus");
			}
		}
	}
}