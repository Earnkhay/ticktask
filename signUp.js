// Email Variable
const myMail = document.getElementById('email1'),
      myUsername = document.getElementById('userName'),
      myPassword = document.getElementById('password1'),
      confirmPassword = document.getElementById('password2'),
      mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      myForm = document.getElementById('form1'),
      mySubmit = document.getElementById('myBtn');


// To add an event listener
myMail.addEventListener('blur', validateMail);
myPassword.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateMypassword);
myForm.addEventListener('submit', validateForm);
// mySubmit.addEventListener('click', validateSubmit);

function validateMail() {
    if (myMail.value.match(mailFormat)) {

    } else {
        alert("invalid email address")
        myMail.value = "";
    }
}

function validatePassword() {
    if (myPassword.value.match(passwordFormat)) {
        
    } else {
        alert("password must be between 6 to 20 characters, must contain at least one numeric digit, one uppercase and one lowercase letter")
        myPassword.value = "";
    }
}
 
function validateMypassword() {
    if (confirmPassword.value != myPassword.value) {
        alert("password doesn't match")
        confirmPassword.value = "";
    } 
}

function validateForm(e) {
    e.preventDefault();
    if(myMail.value != "" && myUsername.value != "" && myPassword.value !="" && confirmPassword.value != ""){
        location.assign("/C:/Users/asus.000/Desktop/ticktask/dashboard.html")
    } else {
        console.log(window.location.href);
        alert('Input fields cannot be blank')
    }
}


