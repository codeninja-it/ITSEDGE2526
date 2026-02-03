
// una tabella qualunque
/*
	// CREATE
	let tabella = new Tabella("categorie", ["idcategoria", "categoria"]);
	
	// INSERT INTO
	tabella
		.add([1, "Antipasti"])
		.add([2, "Pizze"])
		.add([3, "Bibite"]);
	
	// UPDATE WHERE
	tabella.find(r => r.idcategoria == 2).categoria = "PIZZE";

	// DELETE
	tabella.remove(r => r.categoria == "PIZZE");

	// SELECT
	tabella.forEach(r => {
		console.log(r.idcategoria + "\t" + r.categoria);
	});
*/
class Tabella{
	
	constructor(nome, colonne = [], righe = []){
		this.nome = nome;
		this.colonne = colonne;
		this.righe = righe;
	}
	
	add(celle){
		this.righe.push( new Riga(this.colonne, celle) );
		return this;
	}
	
	/*
		
		db.
		from(t => t.nome == "categorie")
		.where(r => r.idcategoria < 3 )
		.forEach(r => r.categoria = r.categoria.toUpperCase() )
	
	*/
	
	forEach(operazione){
		for(let i=0; i < this.righe. length; i++){
			operazione( this.righe[i] );
		}
	}
	
	
	/*
		
		db.
		from(t => {return t.nome = "categorie"})
		.find(r => {return r.categoria == "antipasti"})
		.celle.categoria = "Antipasti";
	
	*/
	
	find(condizione){
		for(let i=0; i < this.righe.length; i++){
			let riga = this.righe[i].find(condizione);
			if(riga != undefined)
				return riga;
		}
		return undefined;
	}
	
	/*
	tabella
		.remove(r => {return r.categoria == "antipasti";})
		.remove(r => {return r.categoria == "pizze"});
	*/
	
	remove(condizione){
		let buffer = [];
		
		this.forEach(riga => {
			if(!condizione(riga))
				buffer.push(riga);
		});		
		
		this.righe = buffer;
		return this;
	}
	
	where(condizione){
		let buffer = [];
		
		this.forEach(riga => {
			if(condizione(riga))
				buffer.push(riga);
		});
		
		return new Tabella("", buffer);
	}
	
}