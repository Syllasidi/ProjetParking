import { Context } from "hono"; 
import { cities } from "../../data/staticDatabase"; 
import ReadOneCityView from '../../views/city/ReadOneCityView'; // Assurez-vous que le chemin est correct
import { notFoundTemplate } from "../../views/TemplateErreure/errorTemplates";

/**
 * Contrôleur pour gérer les requêtes pour afficher les détails d'une ville par son slug.
 * @param {Context} c - Contexte de la requête contenant les informations de la requête et de la réponse.
 * @returns {Promise<string>} - HTML généré pour les détails de la ville.
 */
export const ReadOneCityController = async (c: Context) => {
  // Récupère le slug de la ville à partir de l'URL
  const slug = c.req.param("slug"); 
  
  // Recherche la ville correspondante par son slug
  const city = cities.find((city) => city.slug === slug); 

  // Retourne une erreur 404 si la ville n'existe pas
  if (!city) {
   
      return c.html(notFoundTemplate(`Ville avec le slug '${slug}' introuvable.`), 404);
   
  }

  // Retourne la vue HTML avec les détails de la ville
  return c.html(ReadOneCityView({ citySlug: city.slug })); 
};
