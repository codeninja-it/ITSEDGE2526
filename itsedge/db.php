<?php
	// db.php?q=rossi
	$ricerca = "";

	$dbcon = new mysqli("127.0.0.1", "root", "", "itsphp");

	$dati = $dbcon->query("SELECT contatti.nome, contatti.cognome,
							contatti.email,	tipi.tipo
							FROM contatti 
							LEFT JOIN tipi ON contatti.idtipo=tipi.idtipo;");
	$flusso = [];
	while( $riga = $dati->fetch_assoc() ){
		$flusso[] = $riga;
	}

	$dati->close();
	$dbcon->close();
	
	$buffer = json_encode($flusso, JSON_PRETTY_PRINT);
	echo($buffer);
?>