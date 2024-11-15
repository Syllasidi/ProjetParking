import { Layout } from '../shared/Layout'; 
import Parking from '../../models/Parking';


/**
 * Type des propriétés pour la vue `ReadAllParkingsView`.
 */
type ReadAllParkingsViewProps = {
  parkings: (Parking & { cityName: string })[];
};


/**
 * Génère le HTML pour afficher la liste des parkings dans un layout 
 * @param {ReadAllParkingsViewProps} props - Les propriétés contenant la liste des parkings.
 * @returns {JSX.Element} - Le JSX du layout affichant la liste des parkings.
 */
export const ReadAllParkingsView = ({ parkings }: ReadAllParkingsViewProps) => {
  return (
    <Layout pageTitle="Liste des Parkings">
      <ul>
        {parkings.map(parking => (
          <li key={parking.id}>
            <strong>{parking.name}</strong> - Capacité: {parking.numberOfSpots} places
            <br />
            Ville : {parking.cityName}
            <br />
            Coordonnées GPS: {parking.location.latitude}, {parking.location.longitude}
            <br />
            <a href={`parkings/${parking.id}`}>voir plus</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
