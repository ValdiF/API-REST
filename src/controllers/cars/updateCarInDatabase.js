import { Car } from "../../models/Car.js";

export const updateCarInDatabase = async (req,res) =>{
  try{
    const {matricula} = req.params;
    const {modelo, marca, descripcion, kilometraje, precio} = req.body;
    const car = await Car.findByPk(matricula);
    car.modelo = modelo;
    car.marca = marca;
    car.descripcion = descripcion;
    car.kilometraje = kilometraje;
    car.precio = precio;
    await car.save();

    res.json(car);
  }catch(error){
    return res.status(500).json({message: error.message});
  }
    
}