<?php
	// attivo la sessione
	session_start();
	// db.php?q=rossi
	$ricerca = "";
	
	if(isset($_GET["q"]) && !empty($_GET["q"]))
		$ricerca = $_GET["q"];

	$dbcon = new mysqli("127.0.0.1", "root", "", "itsphp");

	$sql = "SELECT contatti.nome, contatti.cognome,
contatti.email,	tipi.tipo AS tipologia
FROM contatti
LEFT JOIN tipi ON contatti.idtipo=tipi.idtipo
WHERE CONCAT(contatti.email, contatti.nome, contatti.cognome, tipi.tipo)			
LIKE '%{$ricerca}%'
ORDER BY contatti.nome";
			
	// salvo l'ultima query nella sessione utente
	$_SESSION["ultima_select"] = $sql;

	$dati = $dbcon->query($sql);
	
	// ed anche il numero di righe trovate
	$_SESSION["righe_trovate"] = $dati->num_rows;
							
							
	$flusso = [];
	while( $riga = $dati->fetch_assoc() ){
		$flusso[] = $riga;
	}

	$dati->close();
	$dbcon->close();
	
	$buffer = json_encode($flusso, JSON_PRETTY_PRINT);
	
	header("Content-Type: application/json");
	echo($buffer);
?>