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
		
			this.CreaCella(this.riga, this.ristorante.valore);
			this.CreaCella(this.riga, this.nome);
			this.CreaCella(this.riga, this.numero);
			
		// aggiungo la riga dell'elemento
		target.appendChild(this.riga);
	}
	
	CreaCella(destinazione, valore){
		// creo la seconda cella
		let cella = document.createElement("td");
		cella.innerHTML = valore;
		destinazione.appendChild(cella);
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