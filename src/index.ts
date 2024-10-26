import { Hono } from 'hono';
import { HomeController } from './controllers/homeController'; // Importation du contrôleur de la page d'accueil
import { serveStatic } from 'hono/bun';
import { cities, parkings } from './data/staticDatabase';
import { ReadAllCitiesController } from './controllers/cities/ReadAllCitiesController';
import { ReadOneCityController } from './controllers/cities/ReadOneCityController';
import { ReadAllParkingscontroller } from './controllers/parking/ReadAllParkingsController';
import { ReadOneParkingController } from './controllers/parking/ReadOneParkingController';
import {  trimTrailingSlash} from  'hono/trailing-slash'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }))

// Route pour la page d'accueil
app.get('/', HomeController.getHome); 

// Route pour afficher toutes les villes
app.get('/cities', ReadAllCitiesController);

//Route pour afficher une ville par son slug
app.get('/cities/:slug', ReadOneCityController);

// Route pour afficher touts les parkings
app.get('/parkings', ReadAllParkingscontroller);

//Route pour afficher un parking pas son id
app.get('/parkings/:id', ReadOneParkingController);

app.use(trimTrailingSlash())
//  les erreurs 404
app.notFound((c) => {
  return c.text('Page not found', 404);
});

// Exporter l'application
export default app;
