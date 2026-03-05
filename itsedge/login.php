<html>
	<head>
		<title>Login</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">    
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
	</head>
	<body>
		<h1 class="bg-primary text-white p-3">Login</h1>
		<div class="container">	
			<?php
				session_start();
			
				if(isset($_SESSION["utente"])){
					// so chi è e lo so perchè controllo dentro SESSION
					echo("Bentornato!");
				} else if (isset($_POST["user"]) && isset($_POST["pass"])){
					// devo controllare se è davvero lui
					$user = $_POST["user"];
					$pass = $_POST["pass"];
					$sql = "SELECT idUtente 
							FROM utenti 
							WHERE user='{$user}'
							AND pass=MD5('{$pass}' + YEAR(utenti.iscrizione))
							LIMIT 1;";
					$conn = new mysqli("127.0.0.1", "root", "", "itsphp");
						$dati = $conn->query($sql);
						if($riga = $dati->fetch_assoc()){
							$_SESSION["utente"] = $riga["idUtente"];
							echo("Benvenuto!");
						} else {
							echo("Non ho idea di chi tu sia...");
						}
						$dati->close();
					$conn->close();							
				} else {
					// è appena arrivato e gli devo dare gli strumenti per presentarsi
					?>
						<form method="POST">
							<p>
								<label for="txtUtente">Nome utente</label>
								<input name="user" id="txtUtente" class="form-control" />
							</p>
							<p>
								<label for="txtPass">Password</label>
								<input type="password" name="pass" id="txtPass" class="form-control" />
							</p>
							<button class="btn btn-primary w-100">login</button>
						</form>
					<?php
				}
			?>
		</div>
	</body>
</html>