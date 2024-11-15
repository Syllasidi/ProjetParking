import { Context } from "hono"; 
import ReadOneParkingView from '../../views/Parkings/ReadOneParkingView'; 
import { notFoundTemplate, internalServerErrorTemplate } from "../../views/TemplateErreure/errorTemplates";
import { PrismaClient } from "@prisma/client";
import Parking from "../../models/Parking";

const prisma = new PrismaClient();

/**
 * Récupère un parking avec ses détails, y compris le nom de la ville associée.
 * @param {number} parkingId - L'ID du parking à récupérer.
 * @returns {Promise<Parking & { cityName: string } | null>} - Retourne les détails du parking ou null si non trouvé.
 */
export const fetchOneParking = async (parkingId: number): Promise<Parking & { cityName: string } | null> => {
  try {
    // Récupère les informations du parking avec les détails de la ville
    const parkingData = await prisma.parking.findUnique({
      where: { id: parkingId },
      include: {
        city: true,  // Inclut les informations de la ville associée
      },
    });

    if (!parkingData) {
      return null;  // Retourne null si le parking n'est pas trouvé
    }

    // Crée une instance de Parking et associe le nom de la ville
    const parking = new Parking(
      parkingData.id,
      parkingData.name,
      parkingData.cityId,
      { latitude: parkingData.latitude, longitude: parkingData.longitude },
      parkingData.numberOfPlaces,
      parkingData.hourlyRate
    );

    
    return { ...parking, cityName: parkingData.city.name };
  } catch (error) {
    console.error("Erreur lors de la récupération du parking : ", error);
    return null;
  }
};

/**
 * Contrôleur pour gérer les requêtes pour afficher les détails d'un parking par son ID.
 * @param {Context} c - Contexte de la requête contenant les informations de la requête et de la réponse.
 * @returns {Promise<Response>} - La réponse HTML contenant les détails du parking.
 */
export const ReadOneParkingController = async (c: Context): Promise<Response> => {
  try {
    // Récupère l'ID du parking à partir de l'URL
    const id = parseInt(c.req.param("id"), 10);

    // Vérifie si l'ID est valide (un entier positif)
    if (isNaN(id) || id <= 0) {
      // Retourne une erreur 400 si l'ID est invalide
      return c.html(notFoundTemplate("L'ID du parking doit être un nombre entier valide."), 400);
    }

    // Utilise la fonction `fetchOneParking` pour récupérer les détails du parking
    const parking = await fetchOneParking(id);

    // Si le parking n'est pas trouvé, retourne une erreur 404
    if (!parking) {
      return c.html(notFoundTemplate(`Parking avec l'ID '${id}' introuvable.`), 404);
    }

    // Retourne la vue HTML avec les détails du parking
    return c.html(ReadOneParkingView({ parking }));

  } catch (error) {
    console.error("Erreur lors de la récupération du parking : ", error);
    // Retourne une erreur 500 si une exception imprévue se produit
    return c.html(internalServerErrorTemplate(), 500);
  }
};
