/*
CREATE TABLE IF NOT EXISTS Tavoli (
	nome TEXT DEFAULT 'non impostato',
	numero INT DEFAULT 1
)
*/

// new Tavolo("Finestra", 2);
// new Tavolo("Angolo");
// new Tavolo();
class Tavolo {
	constructor(ristorante, nome = "non impostato", numero = 1){
		this.nome = nome;
		this.ristorante = ristorante;
		this.numero = numero;
		this.ristorante.tavoli.push(this);
		this.comande = [];
	}
	
	Rendering(target){
		this.riga = document.createElement("tr");
		this.riga.addEventListener("click", this.Cancella.bind(this));
			
		let campi = Object.keys(this);
		for(let i=0; i < campi.length; i++){
			let campo = campi[i];
			if (campo != "ristorante" && campo != "comande" && campo != "riga")
				if(campo == "numero")
					this.DisegnaCella(this.riga, campo, "number");
				else
					this.DisegnaCella(this.riga, campo);
		}
			
		// aggiungo la riga dell'elemento
		target.appendChild(this.riga);
	}
	
	DisegnaIntestazione(destinazione, attributo){
		let cella = document.createElement("th");
		cella.innerHTML = attributo;
		destinazione.appendChild(cella);
	}
	
	DisegnaCella(destinazione, attributo, tipo = "text"){
		let cella = document.createElement("td");
		cella.dataset["campo"] = attributo;
		cella.dataset["tipo"] = tipo;
		cella.innerHTML = this[attributo];
		cella.addEventListener("dblclick", this.Modifica.bind(this));
		destinazione.appendChild(cella);
	}
	
	Modifica(evento){
		let cella = evento.target;
		let vecchioValore = cella.innerText;
		cella.innerHTML = "";
		let campo = document.createElement("input");
		campo.type = cella.dataset["tipo"];
		campo.value = vecchioValore;
		campo.addEventListener("focusout", this.Salva.bind(this));
		cella.appendChild(campo);
	}
	
	Salva(evento){
		if(!confirm('Sei sicuro?'))
			return;
		let input = evento.target;
		let attributo = input.parentNode.dataset["campo"];
		this[attributo] = input.value;
		input.parentNode.innerHTML = input.value;
	}
	
	Cancella(evento){
		//evento.target == this.riga
		if(evento.ctrlKey){
			// cancello la riga


			var tabella = this.riga.parentNode;
			tabella.removeChild(this.riga);
		}
	}
}