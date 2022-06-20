import { Car } from "../../models/Car.js";
export const createCarOnDatabase = async (req, res) => {
    try {
        const { matricula, modelo, marca, descripcion, kilometraje, precio, img } = req.body;
        const newCar = await Car.create({
            matricula,
            modelo,
            marca,
            descripcion,
            kilometraje,
            precio,
            img

        });
        res.json(newCar);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}