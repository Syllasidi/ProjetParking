// ./src/views/city/ReadOneCityView.tsx

import { Layout } from '../shared/Layout'; 
import { cities, parkings } from '../../data/staticDatabase'; 
import City from '../../models/City';

type ReadOneCityViewProps = {
  citySlug: string; // Slug de la ville à afficher
};

/**
 * Composant ReadOneCityView pour afficher les détails d'une ville spécifique.
 * @param {ReadOneCityViewProps} props - Les propriétés contenant le slug de la ville.
 * @returns {JSX.Element} - Le contenu HTML généré avec TSX.
 */
const ReadOneCityView = ({ citySlug }: ReadOneCityViewProps) => {
  const city = cities.find(city => city.slug === citySlug);
  
  // Affiche une erreur si la ville n'est pas trouvée
  if (!city) {
    return (
      <Layout pageTitle="Ville non trouvée">
        <h1>Erreur 404</h1>
        <p>La ville que vous recherchez n'existe pas.</p>
      </Layout>
    );
  }

  // Les parkings associés à la ville trouvée
  const cityParkings = parkings.filter(parking => parking.city_id === city.id);

  return (
    <Layout pageTitle={`Détails de ${city.name}`}>
      <h1>{city.name}, {city.country}</h1>
      <p>Coordonnées GPS : {city.location.latitude}, {city.location.longitude}</p>
      <h2>Parkings Associés :</h2>
      {cityParkings.length > 0 ? (
        <ul>
          {cityParkings.map(parking => (
            <li key={parking.name}>
              {parking.name} - Capacité: {parking.numberOfSpots} - Note: {parking.hourlyRate}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun parking associé trouvé pour cette ville.</p>
      )}
    </Layout>
  );
};

export default ReadOneCityView;
