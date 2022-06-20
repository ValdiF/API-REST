import { Car } from "../../models/Car.js";

export const getCarsFromDatabase = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}