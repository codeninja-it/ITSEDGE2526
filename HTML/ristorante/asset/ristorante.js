/*
	CREATE DATABASE Ristorante;
*/

class Ristorante {
	constructor(nome, categorie = [], tavoli = [], piatti = [], comande = []){
		this.nome = nome;
		this.categorie = categorie;
		this.tavoli = tavoli;
		this.piatti = piatti;
		this.comande = comande;
	}
}

var arezzo = new Ristorante("Arezzo");
	var pizze = new Categoria(arezzo, "Pizze");
		new Piatto(pizze, "Margherita", "", 4.5);
		new Piatto(pizze, "Napoli", "", 3.5);
		new Piatto(pizze, "Diavola", "", 6);
		new Piatto(pizze, "Quattro Stagioni", "", 5.5);
	var primi = new Categoria(arezzo, "Primi");
		new Piatto(primi, "Carbonara", "", 5);
		new Piatto(primi, "Penne Prosciutto e Panna", "", 5);
	new Tavolo(arezzo, "1A");
	new Tavolo(arezzo, "2A");
	new Tavolo(arezzo, "3A");
	new Tavolo(arezzo, "4A");
	new Tavolo(arezzo, "Bar");
	new Tavolo(arezzo, "Veranda 1");
	new Tavolo(arezzo, "Veranda 2");