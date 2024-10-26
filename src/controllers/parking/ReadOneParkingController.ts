import { Context } from "hono"; 
import { parkings } from "../../data/staticDatabase"; 
import ReadOneParkingView from '../../views/Parkings/ReadOneParkingView'; 
import { notFoundTemplate } from "../../views/TemplateErreure/errorTemplates";

/**
 * Contrôleur pour gérer les requêtes pour afficher les détails d'un parking par son ID.
 * @param {Context} c - Contexte de la requête contenant les informations de la requête et de la réponse.
 * @returns {Promise<string>} - HTML généré pour les détails du parking.
 */
export const ReadOneParkingController = async (c: Context) => {
  // Récupère l'ID du parking à partir de l'URL
  const id = parseInt(c.req.param("id"),10); 

  // Recherche le parking correspondant par son ID
  const parking = parkings.find((parking) => parking.id === id); 

  // Vérifie si l'ID n'est pas un nombre valide et id est exactement 6 chiffres
    if (isNaN(id) || id.toString().length !== 6) {
    return c.html(notFoundTemplate(`Parking avec l'ID '${id}' introuvable.`), 404);
  }

  // Retourne une erreur 404 si le parking n'existe pas
  if (!parking) {
    return c.html(notFoundTemplate(`Parking avec l'ID '${id}' introuvable.`), 404);
  }

  // Retourne la vue HTML avec les détails du parking
  return c.html(ReadOneParkingView({ parkingId: parking.id })); 
};
