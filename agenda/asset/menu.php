<?php

	$tutti = scandir("plugin");
	
	echo "<ol>";
	foreach($tutti as $file){
		echo "<li>{$file}</li>";
	}
	echo "</ol>";