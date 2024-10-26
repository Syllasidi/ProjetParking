import { Layout } from '../shared/Layout';
import Parking from '../../models/Parking';

type ReadAllParkingsViewProps = {
  parkings: Array<Parking>;
};

/**
 * Composant ParkingItem : Affiche les détails d'un parking dans la liste.
 * @param {Object} props - Les propriétés contenant les informations du parking.
 * @return {JSX.Element} - Le contenu HTML généré avec les détails d'un parking.
 */
const ParkingItem = ({ parking }: { parking: Parking }) => {
  return (
    <li>
      <strong>{parking.name}</strong> - Capacité: {parking.numberOfSpots} places,
      Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}
      <a href={`/parkings/${parking.id}`}>    plus de détail </a>
    </li>
  );
};

/**
 * Composant ParkingList : Affiche une liste de parkings.
 * @param {Object} props - Les propriétés contenant la liste des parkings.
 * @return {JSX.Element} - Le contenu HTML généré pour la liste des parkings.
 */
const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => (
  <ul>
    {parkings.map((parking) => (
      <ParkingItem  parking={parking} />
    ))}
  </ul>
);

/**
 * Composant ReadAllParkingsView pour afficher la liste de tous les parkings.
 * @param {ReadAllParkingsViewProps} props - Les propriétés contenant la liste des parkings.
 * @return {JSX.Element} - Le contenu HTML généré.
 */
const ReadAllParkingsView = ({ parkings }: ReadAllParkingsViewProps) => {
  return (
    <Layout pageTitle="Liste des Parkings">
      <h1>Liste des Parkings</h1>
      <ParkingList parkings={parkings} />
    </Layout>
  );
};

export default ReadAllParkingsView;
