import Dog from "./models/dog";
import Temperamento from "./models/temperamento";

const models = {Dog, Temperamento};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;
