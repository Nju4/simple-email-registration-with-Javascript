function validateEmail() {
  var emailInput = document.getElementById("email");
  var errorMessage = document.getElementById("error-message");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
  if (emailPattern.test(emailInput.value)) {

    errorMessage.innerHTML = " ";
    emailInput.style.border = '1.5px solid green';
  
  
  } else {
  
    errorMessage.innerHTML = "Please provide a valid email address ";
    emailInput.style.border = '1.5px solid red';
  }
}


  