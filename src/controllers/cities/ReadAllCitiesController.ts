import { Context } from 'hono';
import { cities } from '../../data/staticDatabase';
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';

/**
 * Contrôleur pour gérer la route GET /cities.
 * Il récupère les villes depuis la base de données et retourne la vue HTML.
 * @param c - Le contexte de la requête.
 * @returns {Promise<Response>} - La réponse contenant la vue HTML.
 */
export const ReadAllCitiesController = (c: Context) => {
  // Passe la liste des villes à la vue et génère le HTML
  const htmlContent = ReadAllCitiesView({ cities });
  return c.html(htmlContent) 
};
