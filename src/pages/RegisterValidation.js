function validation(values) {
    alert("")
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.name ===""){
        error.name = "Name shouldnot br empety"
    }
    else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email tidak boleh kosong";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Format email tidak valid";
    } else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "pasword tidak boleh kosong"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Format password tidak valid"
    }else{
        error.password =""
    }
    return error;
}

export default validation;