<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="login.css">
  <script src="login.js" defer></script>
  <title>Login e registrazione | TrekExplore</title>
</head>
<body>
  <nav class="barra-login">
    <a class="logo-login" href="../index.php">
      <img src="../images/logo-montagna-verde.png" alt="Logo TrekExplore">
      <span>TrekExplore</span>
    </a>
    <a class="torna-home" href="../index.php">← Torna alla Home</a>
  </nav>

  <main class="pagina-login">
    <section class="riquadro-login" id="login">
      <h1>Accedi</h1>

      <form id="modulo-login">
        <div class="mb-3">
          <label for="email-login" class="form-label">Email</label>
          <input type="email" class="form-control" id="email-login" required>
        </div>

        <div class="mb-3">
          <label for="password-login" class="form-label">Password</label>
          <div class="campo-password">
            <input type="password" class="form-control" id="password-login" minlength="8" required>
            <button type="button" id="mostra-password-login">Mostra</button>
          </div>
        </div>

        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="ricordami">
          <label class="form-check-label" for="ricordami">Mantieni l'accesso</label>
        </div>

        <p class="messaggio" id="messaggio-login"></p>
        <button class="btn bottone-principale w-100" type="submit">Accedi</button>
        <button class="btn bottone-secondario w-100 mt-2" type="button" id="vai-registrazione">Crea account</button>
      </form>
    </section>

    <section class="riquadro-login" id="registrazione">
      <h1>Crea account</h1>

      <form id="modulo-registrazione">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" required>
        </div>

        <div class="mb-3">
          <label for="cognome" class="form-label">Cognome</label>
          <input type="text" class="form-control" id="cognome" required>
        </div>

        <div class="mb-3">
          <label for="email-registrazione" class="form-label">Email</label>
          <input type="email" class="form-control" id="email-registrazione" required>
        </div>

        <div class="mb-3">
          <label for="password-registrazione" class="form-label">Password</label>
          <div class="campo-password">
            <input type="password" class="form-control" id="password-registrazione" minlength="8" required>
            <button type="button" id="mostra-password-registrazione">Mostra</button>
          </div>
        </div>

        <div class="mb-3">
          <label for="conferma-password" class="form-label">Conferma password</label>
          <input type="password" class="form-control" id="conferma-password" minlength="8" required>
        </div>

        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="termini" required>
          <label class="form-check-label" for="termini">Accetto i termini e la privacy.</label>
        </div>

        <p class="messaggio" id="messaggio-registrazione"></p>
        <button class="btn bottone-principale w-100" type="submit">Registrati</button>
        <button class="btn bottone-secondario w-100 mt-2" type="button" id="vai-login">Torna al login</button>
      </form>
    </section>
  </main>

  <footer class="fondo-login">
    <p>© 2026 TrekExplore</p>
  </footer>
</body>
</html>
