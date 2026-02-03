// una banca dati qualunque
class DB {
	
	constructor(nome, tabelle = []){
		this.nome = nome;
		this.tabelle = tabelle;
	}
	
	save(){
		JSON.stringify(this);
	}
	
	load(){
		
	}
	
	/*
	
		let db = new DB("ristorante", [
			new Tabella("categorie", [
				new Riga([1, "antipasti"]),
				new Riga([2, "primi"]),
				new Riga([3, "secondi"]),
				new Riga([4, "contorni"]),
				new Riga([5, "dolci"]),
			]),
			new Tabella("piatti", [
				new Riga([1, 1, "crostini"]),
				new Riga([2, 1, "antipasto toscano"]),
				new Riga([3, 1, "caprese"]),
			])
		]);
		
		db
			.from(t => {return t.nome == "categorie"})
			.where(r => {return r[1] == "contorni" })
			.selectAll(r => { console.log(r[0] + "\t" + r[1]); });
			
		let target = document.getElementById("tabella");
		db
			.from(t => {return t.nome == "categorie"})
			.selectAll(r => {
				target.innerHTML += "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>";
			});
	
	*/
	
	from(controllo){
		for(let i=0; i < this.tabelle.length; i++){
			let tabella = this.tabelle[i];
			if ( controllo(tabella) ){
				return tabella;
			}
		}
		return undefined;
	}
	
}