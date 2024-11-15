// src/routes/parkingsRoutes.ts
import { Hono } from "hono";
import { ReadAllParkingsController } from "../controllers/parking/ReadAllParkingsController";
import { ReadOneParkingController } from "../controllers/parking/ReadOneParkingController";

const parkingsRoutes = new Hono();

// Route pour afficher tous les parkings
parkingsRoutes.get("/", ReadAllParkingsController);

// Route pour afficher un parking par son ID
parkingsRoutes.get("/:id", ReadOneParkingController);

export default parkingsRoutes;
