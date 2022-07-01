"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initDog = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */    
    static associate({Temperamento}) {
      this.belongsToMany(Temperamento, {through: 'Dog_Temperamento'})
    }
  }
  Dog.init(
    {  
      id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,primaryKey: true},   
      name:DataTypes.STRING,
      height: DataTypes.STRING,allowNull: false,
      weight:  DataTypes.STRING,allowNull: false,
      life_span: DataTypes.STRING,
      image:  DataTypes.STRING},
    {
      sequelize,
      modelName: "Dog",
      tableName: "dogs",
    }
  );
  return Dog;
};

export default initDog(connection, DataTypes);
