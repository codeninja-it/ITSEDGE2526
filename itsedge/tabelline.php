<?php

// imposto i valori di default
$base = 2;
$ripetizioni = 10;
// intercetto il volere dell'utente
// es.: GET tabelline.php?base=3&rep=13

// controllo se dopo il ? c'è base
if(isset($_GET["base"]) && !empty($_GET["base"]))
	// e lo prendo
	$base = intval($_GET["base"]);
// controllo se dopo il ? c'è rep
if(isset($_GET["rep"]) && !empty($_GET["rep"]))
	// e nel caso lo prendo
	$ripetizioni = intval($_GET["rep"]);

// creo la zona in ram
$flusso = [];
// e la inizializzo con le descrizioni
$flusso["tabellina"] = [];
$flusso["tabellina"]["base"] = $base;
$flusso["tabellina"]["ripetizioni"] = $ripetizioni;
$flusso["operazioni"] = [];
// eseguo il mio loop
for($i = 0; $i < $ripetizioni; $i++){
	// svolgo l'operazione
	$flusso["operazioni"][] = "" . ($base * ($i + 1));
}
// converto da ram a testo
$buffer = json_encode($flusso, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
// modifico la busta
header("Content-Type: application/json");
// ed invio
echo($buffer);
?>