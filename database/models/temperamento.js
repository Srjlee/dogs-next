"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initTemperamento = (sequelize, DataTypes) => {
  class Temperamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate({Dog}) {
      this.belongsToMany(Dog, {through: 'Dog_Temperamento'})
    }
  }
  Temperamento.init(
    {     
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },    
      name: DataTypes.STRING,     
    },
    {
      sequelize,
      modelName: "Temperamento",
      tableName: "temperaments",
    }
  );
  return Temperamento;
};

export default initTemperamento(connection, DataTypes);
