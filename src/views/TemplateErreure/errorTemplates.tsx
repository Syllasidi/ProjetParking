/**
 * Génère le modèle HTML pour une page d'erreur 404.
 * @param {string} message - Message d'erreur à afficher.
 * @returns {string} - Modèle HTML de la page d'erreur 404.
 */
export const notFoundTemplate = (message: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page non trouvée</title>
  <link rel="stylesheet" href="/static/style.css" />
</head>
<body>
  <h1>Erreur 404</h1>
  <p>${message}</p>
  <a href="/">Retour à l'accueil</a>
</body>
</html>`;

/**
 * Génère le modèle HTML pour une page d'erreur 500.
 * @returns {string} - Modèle HTML de la page d'erreur 500.
 */
export const internalServerErrorTemplate = (): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Erreur 500</title>
  <link rel="stylesheet" href="/static/style.css" />
</head>
<body>
  <h1>Erreur 500</h1>
  <p>Une erreur interne est survenue. Veuillez réessayer plus tard.</p>
  <a href="/">Retour à l'accueil</a>
</body>
</html>`;
