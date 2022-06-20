import{Router} from "express";
import { getCarsFromDatabase } from "../controllers/cars/getCarsFromDatabase.js";
import { createCarOnDatabase } from "../controllers/cars/createCarOnDatabase.js";
import { updateCarInDatabase } from "../controllers/cars/updateCarInDatabase.js";
import { deleteCarFromDatabase } from "../controllers/deleteCarFromDatabase.js";
const router = Router();

router.get('/cars', getCarsFromDatabase);
router.post('/cars', createCarOnDatabase);
router.put('/cars/:matricula', updateCarInDatabase);
router.delete('/cars/:matricula', deleteCarFromDatabase);

export default router;