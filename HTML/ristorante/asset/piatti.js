
class Piatto {
	constructor(categoria, nome, descrizione, prezzo){
		this.nome = nome;
		this.descrizione = descrizione;
		this.prezzo = prezzo;
		this.categoria = categoria;
		this.categoria.piatti.push(this);
	}	
}