
// una tabella qualunque
class Tabella{
	
	constructor(nome, righe = []){
		this.nome = nome;
		this.righe = righe;
	}
	
	//
	// let tabella = new Tabella("categorie", [
	//		new Riga(["1", "Pizze"]),
	//		new Riga(["2", "Antipasti"]),
	//		new Riga(["3", "Primi terra"]),
	//		new Riga(["3", "Primi mare"]),
	//	]);
	//	let risultato = tabella.where(riga => { return riga[1] == "Primi Terra" || riga[1] == "Antipasti"; });
	//
	
	selectAll(operazione){
		for(let i=0; i < this.righe.length; i++){
			operazione(this.righe[i]);
		}
	}
	
	add(riga){
		this.righe.push(riga);
		return this;
	}
	
	
	/*
		
		db.
		from(t => {return t.nome = "categorie"})
		.find(r => {return r[1] == "antipasti"})
		.celle[1] = "Antipasti";
	
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
		.remove(r => {return r[1] == "antipasti";})
		.remove(r => {return r[2] == "pizze"});
	*/
	
	remove(condizione){
		let buffer = [];
		for(let i=0; i < this.righe.length; i++){
			let riga = this.righe[i];
			if(!condizione(riga)){
				buffer.push(riga);
			}
		}
		this.righe = buffer;
		return this;
	}
	
	where(condizione){
		let buffer = [];
		for(let i = 0; i < this.righe.length; i++){
			let riga = this.righe[i];
			if( riga.where(condizione) )
				buffer.push(riga);
		}
		return new Tabella("", buffer);
	}
	
}