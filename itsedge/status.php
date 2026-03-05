<?php
	// attivo la sessione
	session_start();
	// cambio il tipo di output
	header("Content-Type: application/json");
	// converto in json
	$buffer = json_encode($_SESSION);
	// invio il risultato
	echo($buffer);