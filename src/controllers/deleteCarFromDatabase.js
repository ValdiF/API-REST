import { Car } from "../models/Car.js";

export const deleteCarFromDatabase = async (req,res) =>{
    try{
    const {matricula}= req.params;
    await Car.destroy({
        where:{
            matricula,
        }
    });
    res.sendStatus(204);
}catch(error){
    return res.status(500).json({message: error.message});
}
}
