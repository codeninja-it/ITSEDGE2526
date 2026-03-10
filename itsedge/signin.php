<html>
	<head>
		<title>Signin</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">    
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
	</head>
	<body>
		<h1 class="bg-primary text-white p-3">Signin</h1>
		<div class="container">	
			<?php
				session_start();
			
				if(isset($_SESSION["utente"])){
					
					
					
				} else if (isset($_POST["user"]) && isset($_POST["pass"])){
					// sanare eventuali caratteri rischiosi
					$nome = addslashes($_POST["nome"]);
					$cognome = addslashes($_POST["cognome"]);
					$user = addslashes($_POST["user"]);
					$pass = addslashes($_POST["pass"]);
					// creare a query
					$sql = "INSERT INTO utenti (nome, cognome, user, pass)
							VALUES (
								'{$nome}',
								'{$cognome}',
								'{$user}', 
								MD5('{$pass}' + YEAR(NOW()))
							);";
					// chiamo il server
					$conn = new mysqli("127.0.0.1", "root", "", "itsphp");
					
					try {
						$risultato = $conn->query($sql);
					} catch (Exception $e){
						$risultato = false;
					}
					
					// eseguo la query
					if($risultato){
						// se ha coinvolto una riga
						if($conn->affected_rows == 1){
							?>
							<div class="alert alert-success">Ora poi accedere al sistema!</div>
							<?php
						} else {
							?>
							<div class="alert alert-danger">Utente già iscritto!</div>
							<?php
						}							
					}
						
					$conn->close();							
				} else {
					// è appena arrivato e gli devo dare gli strumenti per presentarsi
					?>
						<form method="POST">
							<p>
								<label for="txtNome">Nome</label>
								<input id="txtNome" name="nome" class="form-control" />
							</p>
							<p>
								<label for="txtCognome">Cognome</label>
								<input id="txtCognome" name="cognome" class="form-control" />
							</p>
							<p>
								<label for="txtUtente">Nome utente</label>
								<input name="user" id="txtUtente" class="form-control" />
							</p>
							<p>
								<label for="txtPass">Password</label>
								<input type="password" name="pass" id="txtPass" class="form-control" />
							</p>
							<button class="btn btn-primary w-100">registrati</button>
						</form>
					<?php
				}
			?>
		</div>
	</body>
</html>