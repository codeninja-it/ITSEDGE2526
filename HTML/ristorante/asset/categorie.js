/*
CREATE TABLE IF NOT EXISTS categorie (
	nome TEXT,
	descrizione TEXT DEFAULT ''
);

*/


// new Categoria("Pizze");
// new Categoria("Primi", "i migliori primi piatti che tu abbia mai mangiato!");
class Categoria{
	constructor(ristorante, nome, descrizione = ""){
		this.nome = nome;
		this.descrizione = descrizione;
		this.piatti = [];
		this.ristorante = ristorante;
		this.ristorante.categorie.push(this);
	}
}

/*

var categorie = [];
// INSERT INTO categorie (nome) VALUES ('Pizze');
categorie.push(new Categoria("Pizze"));

// DELETE FROM categorie ORDER BY idcategoria DESC LIMIT 1;
categorie.pop();

// SELECT * FROM categorie WHERE nome = 'Pizze';
let buffer = [];
for(let i=0; i < categorie.length; i++)
	if(categorie[i].nome == "Pizze")
		buffer.push(categorie[i]);
return buffer;

// SELECT * FROM categorie LEFT JOIN prodotti ON categorie.idCategoria=prodotti.idcategoria
let buffer = [];
for(let i=0; i < categlrie.length; i++)
	for(let j=0; j < prodotti.length; j++)
		if(categorie[i] == prodotti[j].Categoria || prodotti[j].Categoria == undefined)
			buffer.push([categorie[i], prodotti[j]]);
return buffer;

*/