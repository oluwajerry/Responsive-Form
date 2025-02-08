const form = document.querySelector('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const radios = document.getElementsByName('query')
const message = document.getElementById('message')
const checkbox = document.getElementById('checkbox')
const firstNameErrorMessage = document.getElementsByClassName('firstNameError')
const lastNameErrorMessage = document.getElementsByClassName('lastNameError')
const emailErrorMessage = document.getElementsByClassName('emailError')
const radioErrorMessage = document.getElementsByClassName('queryError')
const messageErrorMessage = document.getElementsByClassName('messageError')
const consentErrorMessage = document.getElementsByClassName('consentError')
let alertMessage = document.querySelector(".alert");


document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log('loading completed')
    }
})


form.addEventListener('submit', (event) =>{

    // checking and collecting inputed data
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const messageValue = message.value.trim()
    const checkboxValue = checkbox.checked

    let radioSelected = false;
    radios.forEach(radio => {
    if (radio.checked) {
        radioSelected = true;
    }
});

    // Validation if input is empty
    let isValid = true
    if(!firstNameValue){
        firstNameErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }
    if(!lastNameValue){
        lastNameErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }
    if(!emailValue){
        emailErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }
    if(!radioSelected){
        radioErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }
    if(!messageValue){
        messageErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }
    if(!checkboxValue){
        consentErrorMessage[0].classList.add('errorDisplay')
        isValid = false
        event.preventDefault() 
    }

    if(isValid){
        localStorage.setItem("formSubmitted", "true");
    }
}) 
    // Display Success Message
    if (localStorage.getItem("formSubmitted") === "true") {
        if (alertMessage) {
            alertMessage.classList.add("successMessage"); 

            setTimeout(() => {
                alertMessage.classList.remove("successMessage");
                localStorage.clear(); 
            },1000);
        }
    }

    



