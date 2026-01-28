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
		this.nome;
		this.ristorante = ristorante;
		this.ristorante.tavoli.push(this);
		this.comande = [];
	}
}