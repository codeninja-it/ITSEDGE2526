<?php
// lo svolgimento della nostra logica

// creo un array
$flusso = [];

// lo popolo
$flusso["città"] = "Arezzo";
$flusso["aggiornamento"] = "2026-03-04";

// anche il bulk
$flusso["temperature"] = [];
for($i = 0; $i < 100000; $i++){
	$flusso["temperature"][] = 12.5;
}

// lo converto in testo
$buffer = json_encode($flusso, JSON_PRETTY_PRINT);

// modifico l'intestazione
header("Content-Type: application/json");

// stampo il mio array
echo($buffer);