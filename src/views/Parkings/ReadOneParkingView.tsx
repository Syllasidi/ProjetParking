import { Layout } from '../shared/Layout'; 
import { parkings } from '../../data/staticDatabase'; 


type ReadOneParkingViewProps = {
  parkingId: number; // ID du parking à afficher
};

/**
 * Composant ReadOneParkingView pour afficher les détails d'un parking spécifique.
 * @param {ReadOneParkingViewProps} props - Les propriétés contenant l'ID du parking.
 * @returns {JSX.Element} - Le contenu HTML généré avec TSX.
 */
const ReadOneParkingView = ({ parkingId }: ReadOneParkingViewProps) => {
  const parking = parkings.find(parking => parking.id === parkingId);
  
  // Affiche une erreur si le parking n'est pas trouvé
  if (!parking) { 
    return (
      <Layout pageTitle="Parking non trouvé">
        <h1>Erreur 404</h1>
        <p>Le parking que vous recherchez n'existe pas.</p>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`Détails de ${parking.name}`}>
      <h1>{parking.name}</h1>
      <p>Capacité : {parking.numberOfSpots} places</p>
      <p>Tarif horaire : {parking.hourlyRate}€</p>
      <p>Statut : {parking.opened ? 'Ouvert' : 'Fermé'}</p>
      <p>Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}</p>
    </Layout>
  );
};

export default ReadOneParkingView;
