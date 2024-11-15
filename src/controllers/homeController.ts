import { Context } from 'hono';
import GetHomeView from '../views/Home/GetHommeview';

/**
 * HomeController gère la logique de la page d'accueil.
 */
// ./src/controllers/homeController.ts

/**
 * Contrôleur de la page d'accueil .
 * Gère la logique pour afficher la page d'accueil.
 * @param {Context} c - Le contexte de la requête.
 * @returns {Response} - La réponse HTML avec la vue de la page d'accueil.
 */
export const HomeController = (c: Context) => {
  // Génération de la réponse HTML en utilisant la vue GetHomeView
  return c.html(GetHomeView());
};
