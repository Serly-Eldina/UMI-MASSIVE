function validation(values) {
    alert("")
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email ===""){
        error.email = "Name shouldnot br empety"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
    }else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "password shouldnot br empety"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password Didn't match"
    }else{
        error.password =""
    }
    return error;
}

export default validation;