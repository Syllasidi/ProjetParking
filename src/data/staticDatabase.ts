import City from '../models/City';
import Parking from '../models/Parking';
import { GPS } from '../types/GPS';

/**
 * Base de données statique pour les parkings et les villes.
 */
const aixGPS: GPS = { latitude: 43.533329, longitude: 5.43333 };
const speziaGPS: GPS = { latitude: 44.238366, longitude: 9.6912326 };
const aachenGPS: GPS = { latitude: 50.776351, longitude: 6.083862 };
const sanCristobalGPS: GPS = { latitude: 28.4871807, longitude: -16.313879 };
const newcastleGPS: GPS = { latitude: 54.9738474, longitude: -1.6131572 };

export const cities: City[] = [
    new City(1, 'Aix-en-Provence', 'France', aixGPS),
    new City(2, 'La Spezia', 'Italie', speziaGPS),
    new City(3, 'Aix-la-Chapelle', 'Allemagne', aachenGPS),
    new City(4, 'San Cristóbal de La Laguna', 'Espagne', sanCristobalGPS),
    new City(5, 'Newcastle upon Tyne', 'Angleterre', newcastleGPS),
];

export const parkings: Parking[] = [
    new Parking('Parking A', 1, aixGPS, 100, 4.5),
    new Parking('Parking B', 2, speziaGPS, 50, 3.0),
    new Parking('Parking C', 2, speziaGPS, 80, 2.5),
    new Parking('Parking D', 3, aachenGPS, 40, 2.8),
    new Parking('Parking E', 4, sanCristobalGPS, 70, 3.1),
    new Parking('Parking F', 5, newcastleGPS, 60, 2.4),
    new Parking('Parking G', 5, newcastleGPS, 90, 3.2),
];
