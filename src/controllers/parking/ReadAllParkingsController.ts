import { Context } from 'hono';
import {ReadAllParkingsView  } from '../../views/Parkings/ReadAllParkinsView';
import Parking from '../../models/Parking';
import { PrismaClient } from '@prisma/client';


/**
 * Prisma Client pour interagir avec la base de données.
 */
const prisma = new PrismaClient();

/**
 * Récupère les parkings depuis la base de données avec les noms de leurs villes.
 * @returns {Promise<(Parking & { cityName: string })[]>} Liste des objets `Parking` avec leurs villes.
 */
export const fetchAllParkings = async (): Promise<(Parking & { cityName: string })[]> => {
  // Récupère les parkings avec les noms des villes associées
  const parkingsData = await prisma.parking.findMany({
    include: {
      city: true,
    },
  });

  // Transformation des données en objets Parking personnalisés
  return parkingsData.map(parkingData => {
    //  une instance de Parking 
    const parking = new Parking(
      parkingData.id,
      parkingData.name,  // Nom du parking
      parkingData.cityId,  // ID de la ville
      { latitude: parkingData.latitude, longitude: parkingData.longitude }, // Coordonnées GPS
      parkingData.numberOfPlaces,  // Nombre de places
      parkingData.hourlyRate,  // Tarif horaire
    );

    // + le nom de la ville
    return {
      ...parking,
      cityName: parkingData.city.name
    };
  });
};


/**
 * Contrôleur pour gérer la route GET /parkings.
 * Récupère les données de parkings depuis la base de données et retourne le HTML.
 * @param {Context} c - Contexte de la requête.
 * @returns {Promise<Response>} - La réponse contenant la vue HTML.
 */
export const ReadAllParkingsController = async (c: Context) => {
  // Récupérer les données de parkings via Prisma
  const parkings = await fetchAllParkings();

  // Générer le contenu HTML
  const htmlContent = ReadAllParkingsView ({ parkings });

  // Envoyer la réponse HTML
  return c.html(htmlContent);
};
