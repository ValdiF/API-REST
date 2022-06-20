import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Car = sequelize.define('cars', {
    matricula: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    modelo: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    kilometraje: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }

},{
    timestamps: false
})