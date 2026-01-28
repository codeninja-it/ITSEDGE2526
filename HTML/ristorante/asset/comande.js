class Comanda {
	constructor(piatto, tavolo){
		this.piatto = piatto;
		this.tavolo = tavolo;
		this.tavolo.comande.push(this);
	}
}