let inputNumber=  document.getElementById('number');

inputNumber.addEventListener('input',function(){
  if (this.value.length > 12) {
     this.value = this.value.slice(0,12); 
  }
})

let form = document.getElementById("form");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let errorText = document.getElementById("errorText");

form.addEventListener ("submit", (e)=> {
    e.preventDefault();
    if(password.value == confirmPassword.value) {
        location.reload();
    }
    else if (password.value != confirmPassword.value) {
        errorText.innerHTML = "Password don't match";
    }
});