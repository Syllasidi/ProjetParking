import { Context } from "hono";
import { notFoundTemplate ,internalServerErrorTemplate} from "../../views/TemplateErreure/errorTemplates";
import { PrismaClient } from "@prisma/client";
import { ReadOneCityView } from "../../views/city/ReadOneCityView";
import City from "../../models/City";
import Parking from "../../models/Parking";

// Initialisation de Prisma Client
const prisma = new PrismaClient();

/**
 * Récupère les détails d'une ville spécifique avec ses parkings associés.
 * @param {string} slug - Le slug de la ville à récupérer.
 * @returns {Promise<City & { parkings: Parking[] }>} - Les détails de la ville avec ses parkings.
 */
export const fetchOneCityBySlug = async (slug: string): Promise<City & { parkings: Parking[] } | null> => {
  try {
    // Récupère les détails de la ville avec ses parkings associés en utilisant le slug
    const cityData = await prisma.city.findUnique({
      where: { slug: slug },
      include: {
        parkings: true,
      },
    });

    if (!cityData) {
      console.log("Erreur lors de la récupération de la ville");
      return null;
    }

    // Transformation des données en objets City et Parking personnalisés
    const city = new City(
      cityData.id,
      cityData.name,
      cityData.country,
      { latitude: cityData.latitude, longitude: cityData.longitude }
    );

    // Transformation des parkings en objets Parking personnalisés
    const parkings = cityData.parkings.map(parkingData => {
      return new Parking(
        parkingData.id,
        parkingData.name,
        parkingData.cityId,
        { latitude: parkingData.latitude, longitude: parkingData.longitude },
        parkingData.numberOfPlaces,
        parkingData.hourlyRate
      );
    });

    return {
      ...city,
      parkings,
    };
  } catch (error) {
   console.error('Erreur lors de la récupération de la ville :', error);
    return null;
  }
};

/**
 * Contrôleur pour gérer les requêtes pour afficher les détails d'une ville par son slug.
 * @param {Context} c - Contexte de la requête contenant les informations de la requête et de la réponse.
 * @returns {Promise<Response>} - HTML généré pour les détails de la ville.
 */
export const ReadOneCityController = async (c: Context): Promise<Response> => {
  try {
    // Récupère le slug de la ville à partir de l'URL
    const slug = c.req.param("slug");
    
    if (!slug) {
      return c.html(notFoundTemplate(`Le paramètre 'slug' est manquant.`), 400); // 400 pour une mauvaise requête
    }

    // Recherche la ville correspondante par son slug
    const city = await fetchOneCityBySlug(slug);

    // Si la ville n'est pas trouvée, retourne une erreur 404
    if (!city) {
      return c.html(notFoundTemplate(`Ville avec le slug '${slug}' introuvable.`), 404);
    }

    // Retourne la vue HTML avec les détails de la ville
    return c.html(ReadOneCityView({ city}));
  } catch (error) {
    console.error("Error:", error);
    return c.html(internalServerErrorTemplate(), 500);
  }
};
