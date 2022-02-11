const validationService = {};

//Valida si un email es correcto
validationService.validationEmail = (val) => {
  let regName = /^[\w._]+@{1}[\w]+\.+[a-z]{2,3}$/;
  let validation = regName.test(val);
  return validation;
};

//Valida un campo nombre permite solo letras acentuadas y un espacio
validationService.validName = (val) => {
  let regName = /^[A-Za-z ñÑÁÉÍÓÚáéíóú]+$/;
  let validation = regName.test(val);
  return validation;
};

validationService.validPhoneNumber = (val) => {
  let regName = /^[0-9 +]+$/;
  let validation = regName.test(val);
  return validation;
};

export default validationService;
