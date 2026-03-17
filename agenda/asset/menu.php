<?php

	$tutti = scandir("plugin");
	
	echo "<div class='btn-group-vertical w-100'>";
	foreach($tutti as $file){
		if($file != "." && $file != ".."){
			//$voceMenu = str_replace(".php", "", $file);
			//$voceMenu = explode(".", $file)[0];
			$informazioni = explode(".", $file);
			if($informazioni[1] == "php"){
				$nome = $informazioni[0];
				if(isset($_GET["plugin"]) && $nome == $_GET["plugin"]){
					echo "<a href='?plugin={$nome}' class='btn btn-success text-start'>{$nome}</a>";
				} else {
					echo "<a href='?plugin={$nome}' class='btn btn-outline-success text-start'>{$nome}</a>";
				}
			}
		}
	}
	echo "</div>";