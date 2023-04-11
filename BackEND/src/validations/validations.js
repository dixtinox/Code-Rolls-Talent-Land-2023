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

  module.exports = {
    isvalidatGender,
  };
  