<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="login.css?v=3">
  <link rel="stylesheet" href="../navbar/navbar.css?v=1">
  <script src="login.js?v=4" defer></script>
  <title>Login e registrazione | TrekExplore</title>
</head>
<body>
  <nav class="detail-nav login-nav" aria-label="Navigazione principale">
    <a class="brand" href="../index.php" aria-label="Torna alla Home Page">
      <img src="../images/logo-montagna-verde.png" alt="Logo TrekExplore">
      <span>TrekExplore</span>
    </a>
    <a class="back-link" href="../index.php">&larr; Torna alla Home</a>
  </nav>

  <main class="auth-page">
    <h1 class="visually-hidden">Area personale TrekExplore</h1>

    <div class="auth-container">
      <section class="auth-panel" id="login">
        <h2>Avvia sessione</h2>

        <form id="login-form" method="post" action="login.php#login">
          <div class="form-group">
            <label class="visually-hidden" for="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              placeholder="E-mail"
              autocomplete="email"
              required>
          </div>

          <div class="form-group password-field">
            <label class="visually-hidden" for="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              placeholder="Password"
              autocomplete="current-password"
              minlength="8"
              required>
            <button
              type="button"
              class="password-button"
              data-target="login-password"
              aria-label="Mostra la password">
              <span aria-hidden="true">&#128065;</span>
            </button>
          </div>

          <label class="checkbox-label session-option">
            <input type="checkbox" name="remember-me">
            Mantieni l'accesso
          </label>

          <p class="form-message" id="login-message" aria-live="polite"></p>

          <button class="primary-button" type="submit">Avvia sessione</button>
          <button class="secondary-button" type="button" id="show-registration">Crea account</button>
        </form>
      </section>

      <section class="auth-panel is-hidden" id="registrazione">
        <h2>Crea account</h2>

        <form id="registration-form" method="post" action="login.php#registrazione">
          <div class="form-group">
            <label class="visually-hidden" for="registration-name">Nome</label>
            <input
              type="text"
              id="registration-name"
              name="registration-name"
              placeholder="Nome"
              autocomplete="given-name"
              required>
          </div>

          <div class="form-group">
            <label class="visually-hidden" for="registration-surname">Cognome</label>
            <input
              type="text"
              id="registration-surname"
              name="registration-surname"
              placeholder="Cognome"
              autocomplete="family-name"
              required>
          </div>

          <div class="form-group">
            <label class="visually-hidden" for="registration-email">Email</label>
            <input
              type="email"
              id="registration-email"
              name="registration-email"
              placeholder="E-mail"
              autocomplete="email"
              required>
          </div>

          <div class="form-group password-field">
            <label class="visually-hidden" for="registration-password">Password</label>
            <input
              type="password"
              id="registration-password"
              name="registration-password"
              placeholder="Password - almeno 8 caratteri"
              autocomplete="new-password"
              minlength="8"
              required>
            <button
              type="button"
              class="password-button"
              data-target="registration-password"
              aria-label="Mostra la password">
              <span aria-hidden="true">&#128065;</span>
            </button>
          </div>

          <div class="form-group password-field">
            <label class="visually-hidden" for="registration-confirm-password">Conferma password</label>
            <input
              type="password"
              id="registration-confirm-password"
              name="registration-confirm-password"
              placeholder="Conferma password"
              autocomplete="new-password"
              minlength="8"
              required>
            <button
              type="button"
              class="password-button"
              data-target="registration-confirm-password"
              aria-label="Mostra la password di conferma">
              <span aria-hidden="true">&#128065;</span>
            </button>
          </div>

          <label class="checkbox-label terms-option">
            <input type="checkbox" id="accept-terms" name="accept-terms" required>
            Accetto i termini di utilizzo e l'informativa sulla privacy.
          </label>

          <p class="form-message" id="registration-message" aria-live="polite"></p>

          <button class="primary-button" type="submit">Crea account</button>
          <button class="secondary-button" type="button" id="show-login">Torna al login</button>
        </form>
      </section>
    </div>
  </main>

  <footer class="login-footer">
    <p>&copy; 2026 TrekExplore</p>
    <a href="../index.php">Torna alle destinazioni</a>
  </footer>
</body>
</html>
