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
		this.riga.addEventListener("click", this.Cliccato.bind(this));
			
			// creo la prima cella
			let cella1 = document.createElement("td");
			cella1.innerHTML = this.ristorante.nome;
			this.riga.appendChild(cella1);
			
			// creo la seconda cella
			let cella2 = document.createElement("td");
			cella2.innerHTML = this.nome;
			this.riga.appendChild(cella2);
			
			// creo la terza cella
			let cella3 = document.createElement("td");
			cella3.innerHTML = this.numero;
			this.riga.appendChild(cella3);
			
		// aggiungo la riga dell'elemento
		target.appendChild(this.riga);
	}
	
	Cliccato(evento){
		//evento.target == this.riga
		if(evento.ctrlKey){
			// cancello la riga


			var tabella = this.riga.parentNode;
			tabella.removeChild(this.riga);
		}
	}
}