const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorMessages = document.getElementById("error");

form.addEventListener("submit", (e) => {
    

    let messages = [];

    if(name.value === "" || name.value == null) {
        messages.push("Name is Required")
    }

    if(password.value.length <= 6){
        messages.push("Password requires more than 6 characters")
    }

    if(password.value == "password") {
        messages.push("Password cannot be Password")
    }
    
    if(messages.length > 0) {
        errorMessages.innerText = messages.join(', ')
        e.preventDefault 
    }
})