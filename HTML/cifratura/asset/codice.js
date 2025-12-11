// functio di cifratura testi
// es.: Cifra("ciao a tutti da me", 3);
function Cifra(messaggio, chiave){
	// nuovo messaggio cifrato
	var buffer = "";
	// per ogni singolo carattere
	for(var n=0; n < messaggio.length; n++){
		// prendo il numero di tabella ascii
		var lettera = messaggio.charCodeAt(n);
		// controllo se è maiuscola
		var maiuscola = lettera >= 65 && lettera <= 90;
		// controllo se è minuscola
		var minuscola = lettera >= 97 && lettera <= 122;
		// nel caso in cui sia una maiuscola O una minuscola
		if(maiuscola || minuscola){
			// aggiungo la chiave, es.: 65+3 = 68
			lettera = SommaCircolare(lettera, chiave, maiuscola);
		}
		// e attacco la mia lettera al nuovo testo
		buffer += String.fromCharCode(lettera);
	}
	
	// per restituire il mio messaggio cifrato
	return buffer;
}

function SommaCircolare(lettera, chiave, maiuscola){
	// livello la lettera
	if(maiuscola)
		lettera -= 65;
	else
		lettera -= 97;
	// aggiungo la chiave
	lettera += chiave;
	// rendo la serie circolare in senso orario
	lettera = lettera % 26;
	// riporto la differenza tra maiuscole e minuscole
	if(maiuscola)
		lettera += 65;
	else
		lettera += 97;
	return lettera;
}