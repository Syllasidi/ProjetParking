import { Hono } from 'hono';
import { HomeController } from './controllers/homeController'; // Importation du contrôleur de la page d'accueil
import { serveStatic } from 'hono/bun';
import {  trimTrailingSlash} from  'hono/trailing-slash'
import citiesRoutes from './routes/cityRoutes';
import parkingsRoutes from './routes/parkingsRoutes';
import { internalServerErrorTemplate, notFoundTemplate } from './views/TemplateErreure/errorTemplates';
import { HTTPException } from 'hono/http-exception'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }))

// Route pour la page d'accueil
app.get('/',HomeController); 

// Route pour  les villes
app.route('cities',citiesRoutes);


// Route pour  les parkings
app.route('/parkings', parkingsRoutes);


app.use(trimTrailingSlash())
//  les erreurs 404

// Gère les erreurs 404 (page non trouvée)
app.notFound((c) => {
  return c.html(notFoundTemplate('La page demandée n\'a pas été trouvée.'), 404);
});

app.onError((error, c) => {
  // Si l'erreur est une instance d'HttpException et que son statut est 404, on renvoie une page 404
  if (error instanceof HTTPException && error.status === 404) {
    return c.html(notFoundTemplate('Page non trouvée.'), 404); // Gère les erreurs 404 (page non trouvée)
  }


  console.error('Erreur interne:', error); // Log l'erreur pour déboguer
  return c.html(internalServerErrorTemplate(), 500); // les erreurs internes
});
// Exporter l'application
export default app;
