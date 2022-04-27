const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', 
  {
      id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
         
            primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

  },
  dificultad: {
        type: DataTypes.ENUM(["1","2","3","4","5"]),
      //   defaultValue: "1",

  },
  duracion: {
        type: DataTypes.STRING,

  },
  temporada:{
        type: DataTypes.ENUM('Primavera', 'Verano', 'Otoño', 'Invierno'),

  }
  }
  )};