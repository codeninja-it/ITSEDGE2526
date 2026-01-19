class Tabella {
	constructor(target, larghezza, altezza, tempo){
		this.controllo = false;
		
		this.tag = document.getElementById(target);
		let tabella = document.createElement("table");
		this.tag.appendChild(tabella);
		
		this.pulsante = document.createElement("button");
		this.tag.appendChild(this.pulsante);
		this.pulsante.addEventListener("click", this.Attiva.bind(this));
		this.pulsante.innerText = this.controllo ? "disattiva" : "attiva";
		
		this.griglia = [];
		for(let x = 0; x < larghezza; x++){
			let elemento = document.createElement("tr");
			let riga = [];
			for(let y = 0; y < altezza; y++){
				riga[y] = new Cella(this, elemento, x, y, tempo);
			}
			this.griglia[x] = riga;
			tabella.appendChild(elemento);
		}
	}
	
	Attiva(){
		this.controllo = !this.controllo;
		this.pulsante.innerText = this.controllo ? "Disattiva" : "Attiva";
	}
}