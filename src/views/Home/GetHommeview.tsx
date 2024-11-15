import Layout from '../shared/Layout';

/**
 * Composant de vue pour la page d'accueil.
 * @returns {string} - La structure HTML de la page d'accueil.
 */
const GetHomeView = () => {
    return (
    <Layout pageTitle="Welcome to EuroPark">
      <h1>Welcome to EuroPark</h1>
      <img src="../static/parking.jpg" alt="Parking" style="width:100%;max-width:400px;margin-bottom:20px;" />          
      <p>
        Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!
      </p>
      <ul>
        <li><a href="/cities">Our Cities</a></li>
        <li><a href="/parkings">Our Car Parks</a></li>
      </ul>
    `</Layout>
    
  );
  
};

export default GetHomeView;
