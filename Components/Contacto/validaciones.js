export const validacionesContacto = (name, email, message) => {
    const errors = {};
  
    if (!name) {
      errors.name = 'El nombre es obligatorio';
    }
  
    if (!email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!isValidEmail(email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }
  
    if (!message) {
      errors.message = 'El mensaje es obligatorio';
    }
  
    return errors;
  };
  
  export const isValidEmail = (email) => {
    // Implementa tu lógica de validación de correo electrónico aquí
    // Este es solo un ejemplo básico
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  