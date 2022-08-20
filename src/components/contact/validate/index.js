const validate = (input) => {
    const errors = {}
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)){
        errors.email = 'El email no es valido.'
    }
    if(input.name.trim().length === 0){
        errors.name = 'Debes ingresar un nombre.'
    }
    if(input.name.trim().length < 3){
        errors.name = 'El nombre debe tener al menos 3 caracteres.'
    }
    if(input.email.trim().length === 0){
        errors.email = 'Debes ingresar un email.'
    }
    if(input.message.trim().length === 0){
        errors.message = 'Debes ingresar un mensaje.'
        
    }
    if(input.message.trim(). length < 10){
        errors.message = 'El mensaje debe tener más de 10 caracteres.'
    }
    return errors;
}

export default validate;