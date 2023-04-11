const mongoose = require('mongoose')
const isvalidatGender = (data) => {
    switch (data) {
      case "Masculino":
      case "Femenino":
      case "Otro":
      case "Prefiero no especificar":
        return true;
      default:
        return false;
    }
  };
const isObjectIdValid = (id) => {
    return mongoose.isValidObjectId(id) && id.length === 24;
  };
  module.exports = {
    isvalidatGender,
    isObjectIdValid,
  };
  