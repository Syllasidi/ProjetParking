import { Context } from 'hono';
import { parkings } from '../../data/staticDatabase';
import ReadAllParkingsView from '../../views/Parkings/ReadAllParkinsView';

/**
 * Contrôleur pour gérer la route GET /Parkings.
 * Il récupère les villes depuis la base de données et retourne la vue HTML.
 * @param c - Le contexte de la requête.
 * @returns {Promise<Response>} - La réponse contenant la vue HTML.
 */
export const ReadAllParkingscontroller = (c: Context) => {
 
  const htmlContent = ReadAllParkingsView({ parkings });
  return c.html(htmlContent) 
};
