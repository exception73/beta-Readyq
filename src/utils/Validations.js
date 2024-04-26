export const stepOneValidation = (name) => {
    const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);
    if (!isNameValid) return "Enter you valid name";
    return null;
  }
  
  