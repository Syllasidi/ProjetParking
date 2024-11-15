import City from '../../models/City';
import Parking from '../../models/Parking';
import { Layout } from '../shared/Layout';

/**
 * Type des propriétés pour la vue `ReadAllCitiesView`.
 */
type ReadAllCitiesViewProps = {
  cities: (City & { parkings: Parking[] })[];
};


/**
 * Génère le HTML pour afficher la liste des villes dans un layout
 * @param {ReadAllCitiesViewProps} props - Les propriétés contenant la liste des villes.
 * @returns {JSX.Element} - Le JSX du layout affichant la liste des villes.
 */
export const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => {
  return (
    <Layout pageTitle="Liste des Villes">
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <strong>{city.name}</strong> - Pays: {city.country}
            <br />
            Coordonnées GPS: {city.location.latitude}, {city.location.longitude}
            <br />
            Parkings associés:
            <ul>
              {city.parkings.map(parking => (
                <li key={parking.id}>
                  <strong>{parking.name}</strong> - Capacité: {parking.numberOfSpots} places
                  <br />
                  
                </li>
              ))}
            </ul>
            <a href={`../cities/${city.slug}`}>voir plus sur cette ville</a>
          </li>
        ))}
      </ul>

    </Layout>
  );
};

