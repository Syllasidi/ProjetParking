import { html } from 'hono/html';

type Props = {
  children: any;
  pageTitle: string;
};

/**
 * Composant Layout pour structurer les pages HTML de l'application.
 * @param {Props} props - Les propriétés du composant.
 * @returns {string} - La structure HTML de base.
 */
export const Layout = ({ children, pageTitle }: Props) => html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="/static/style.css" />
</head>
<body>
  <header>
    <h1>${pageTitle}</h1>
  </header>
  <main>
    ${children}
  </main>
  <footer>
    <p>&copy; ${new Date().getFullYear()} -  application de parking</p>
  </footer>
</body>
</html>`;
export default Layout;
