
class Passo {
	// new Passo(labirinto, labirinto.inizio[0], labirinto.inizio[1], labirinto.fine, []);
	constructor(labirinto, y, x, arrivo, storia){
		// innanzi tutto controllo le condizioni negative
		// perchè sono bloccanti
		if(
			labirinto.celle[y] == undefined || // sono oltre i confini del mondo sulla verticale 
			labirinto.celle[y][x] == undefined || // sono fuori dai confini sull'orizzontale
			!labirinto.celle[y][x] || // sono dentro ad un muro
			this.SonoGiaStatoQui(storia, x, y) // se sono già stato qui
			) 
			return; // non fare più nulla perchè sei morto
		// che ho controllato se sono vivo
		// controllo l'unica condizione positiva che ho
		if(y == arrivo[0] && x == arrivo[1]){
			this.StampaPercorso(labirinto, storia);
		}
		// segno le mie coordinate in storia
		storia.push([y, x]);
		// creo una copia dell'history board convertendolo in testo
		let copia = JSON.stringify(storia);
		// e poi riportandolo in ram
		copia = JSON.parse(copia);
		// e se non mi posso spostare creo una copia di me stesso su ogni cella adiacente
		new Passo(labirinto, y + 1, x, arrivo, copia);
		new Passo(labirinto, y - 1, x, arrivo, copia);
		new Passo(labirinto, y, x + 1, arrivo, copia);
		new Passo(labirinto, y, x - 1, arrivo, copia);
	}
	
	StampaPercorso(labirinto, storia){
		labirinto.soluzione = storia;
		alert(JSON.stringify(storia));
	}
	
	SonoGiaStatoQui(storia, x, y){
		for(let i=0; i < storia.length; i++){
			let elemento = storia[i];
			if(elemento[0] == y && elemento[1] == x){
				return true;
			}
		}
		return false;
	}
}