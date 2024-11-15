import { Layout } from '../shared/Layout'; 
import Parking from '../../models/Parking';

/**
 * Type des propriétés pour la vue `ReadOneParkingView`.
 */
type ReadOneParkingViewProps = {
  parking: Parking & { cityName: string }; // Un objet parking 
};

/**
 * Composant ReadOneParkingView pour afficher les détails d'un parking spécifique.
 * @param {ReadOneParkingViewProps} props - Les propriétés contenant les informations du parking.
 * @returns {JSX.Element} - Le contenu HTML généré avec TSX.
 */
const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
  return (
    <Layout pageTitle={`Détails de ${parking.name}`}>
      <h1>{parking.name}</h1>
      <p>Capacité : {parking.numberOfSpots} places</p>
      <p>Tarif horaire : {parking.hourlyRate}€</p>
      <p>Statut : {parking.opened ? 'Ouvert' : 'Fermé'}</p>
      <p>Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}</p>
      <p>Ville : {parking.cityName}</p>
    </Layout>
  );
};

export default ReadOneParkingView;
