import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';
import  City  from '../../models/City';
import  Parking  from '../../models/Parking';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';
import { internalServerErrorTemplate, notFoundTemplate } from '../../views/TemplateErreure/errorTemplates';

const prisma = new PrismaClient();

/**
 * Récupère les villes depuis la base de données avec leurs parkings associés.
 * @returns {Promise<(City & { parkings: Parking[] })[]>} Liste des villes et de leurs parkings.
 */
const fetchAllCities = async (): Promise<(City & { parkings: Parking[] })[]> => {
  try {
    // Récupérer les données des villes avec leurs parkings associés
    const citiesData = await prisma.city.findMany({
      include: {
        parkings: true,
      },
    });

    // Transformation des données en instances des modèles City et Parking
    return citiesData.map(cityData => {
      const city = new City(
        cityData.id,
        cityData.name,
        cityData.country,
        { latitude: cityData.latitude, longitude: cityData.longitude }
      );

      const parkings = cityData.parkings.map(parkingData => new Parking(
        parkingData.id,
        parkingData.name,
        parkingData.cityId,
        { latitude: parkingData.latitude, longitude: parkingData.longitude },
        parkingData.numberOfPlaces,
        parkingData.hourlyRate
      ));
     
      return {
        ...city,
        parkings,
      };
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des villes et parkings:', error);
    throw new Error('Impossible de récupérer les données des villes.');
  }
};

/**
 * Contrôleur pour afficher toutes les villes.
 * @param c - Le contexte de la requête.
 * @returns {Promise<Response>} - La réponse contenant la vue HTML avec toutes les villes.
 */
export const ReadAllCitiesController = async (c: Context): Promise<Response> => {
  try {
    const cities = await fetchAllCities();
    return c.html(ReadAllCitiesView({ cities }));
  } catch (error) { 
    return c.html(internalServerErrorTemplate(), { status: 500 });
  }
};
