
import { Layout } from '../shared/Layout';
import City from '../../models/City';

type ReadAllCitiesViewProps = {
  cities: Array<City>;
};

/**
 * Vue TSX pour afficher la liste des villes.
 * @param {ReadAllCitiesViewProps} props - Les données contenant les villes.
 * @returns {JSX.Element} - Le contenu HTML généré avec TSX.
 */

/**  
 * Composant CityLink : Génère un lien vers la page d'une ville 
 * @param {Object} props - Contient la ville à afficher.
 * @return {JSX.Element} - Le lien en utilisant le slug de la ville 
*/
const CityLink = ({ city }: { city: City }) => {
  return (
    <li>
      <a href={`/cities/${city.slug}`}>{city.name} - {city.country}</a>
      <p>Coordonnées GPS : {city.location.latitude}, {city.location.longitude}</p>
    </li>
  );
};

// Utilisation de CityLink avec la clé 'key' dans la liste
const CitiesList = ({ cities }: { cities: Array<City> }) => (
  <ul>
    {cities.map((city) => (
      <CityLink   city={city} /> 
    ))}
  </ul>
);

// Composant principal ReadAllCitiesView
const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => {
  return (
    <Layout pageTitle="Liste des Villes">
      <h1>Liste des Villes</h1>
      <CitiesList cities={cities} />
      
    </Layout>
  );
};

export default ReadAllCitiesView;
