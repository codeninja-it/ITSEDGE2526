class Tabella {
	constructor(target, larghezza, altezza, tempo){
		this.controllo = false;
		this.totVirus = 0;
		this.letture = [];
		
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
		
		setInterval(this.AggiornaLetture.bind(this), 100);
		setInterval(this.Esporta.bind(this), 30 * 1000);
	}
	
	AggiornaLetture(){
		if(this.controllo)
			this.letture.push(this.totVirus);
	}
	
	Attiva(){
		this.controllo = !this.controllo;
		this.pulsante.innerText = this.controllo ? "Disattiva" : "Attiva";
	}
	
	Esporta(){
		let txtEsporta = document.getElementById("esportazione");
		txtEsporta.value = "";
		for(let i=0; i < this.letture.length; i++){
			txtEsporta.value += i + "\t" + this.letture[i] + "\n";
		}
	}
}