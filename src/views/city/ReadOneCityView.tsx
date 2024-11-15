import City from '../../models/City';
import Parking from '../../models/Parking';
import Layout from '../shared/Layout';
/**
 * Type des propriétés pour la vue `ReadOneCityView`.
 */
type ReadOneCityViewProps = {
  city: City & { parkings: Parking[] };
};


/**
 * Génère le HTML pour afficher les détails d'une ville dans un layout
 * @param {ReadOneCityViewProps} props - Les propriétés contenant les détails de la ville.
 * @returns {JSX.Element} - Le JSX du layout affichant les détails de la ville.
 */
export const ReadOneCityView = ({ city }: ReadOneCityViewProps) => {
  return (
    <Layout pageTitle={`Détails de la ville: ${city.name}`}>
      <h2>Pays: {city.country}</h2>
      <h3>Coordonnées GPS: {city.location.latitude}, {city.location.longitude}</h3>
      <h2>Parkings associés:</h2>
      <ul>
        {city.parkings.map(parking => (
          <li key={parking.id}>
            <strong>{parking.name}</strong> - Capacité: {parking.numberOfSpots} places
            <br />
            <a href={`../parkings/${parking.id}`}>voir plus sur ce parking</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
