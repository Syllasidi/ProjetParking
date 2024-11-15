
import { Hono } from "hono";
import { ReadAllCitiesController } from "../controllers/cities/ReadAllCitiesController";
import { ReadOneCityController } from "../controllers/cities/ReadOneCityController";

export const citiesRoutes = new Hono();

// Route pour afficher toutes les villes
citiesRoutes.get("/", ReadAllCitiesController);

// Route pour afficher une ville par son slug
citiesRoutes.get("/:slug", ReadOneCityController);

export default citiesRoutes;