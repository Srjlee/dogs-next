'use strict';
const {Model, DataTypes} = require('sequelize')
import connection from '../connection'

const initDog_Temperamento = (sequelize, DataTypes) => {
  class Dog_Temperamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog_Temperamento.init({
    dogId: DataTypes.UUID,
    temperamentId: DataTypes.UUID, 
   
  }, {
    sequelize,
    modelName: 'Dog_Temperamento',
    tableName: 'Dog_Temperamento'
  });
  return Dog_Temperamento;
};

export default initDog_Temperamento(connection, DataTypes);