const form = document.getElementById('mymethodform');
let userName = document.getElementById('username');
let Email = document.getElementById('Email');
let password = document.getElementById('password'); 
let nameError = document.getElementById('nameerrormsg');
let EmailError = document.getElementById('Emailerrormsg');
let passwordError = document.getElementById('passworderrormsg');

form.addEventListener('submit',(event) => {
  event.preventDefault();
 
  if( userName.value !==  ""){
    nameError.innerHTML = '';
    console.log(userName.value)
  };
  
  if( Email.value !==  ""){
    EmailError.innerHTML = '';
    console.log(Email.value)
  };

  if( password.value !== ""){
    passwordError.innerHTML = '';
    console.log(password.value)
  }
  
  if( userName.value ===  ""){
    nameError.innerHTML = 'Name is required*'; 
    nameError.style.color = '#2def0fdf';
   };
   
   if( Email.value === ""){
    EmailError . innerHTML='Email is required*';
    EmailError.style.color = '#2def0fdf';
    };
    
    if( password.value === "") { 
    passwordError.innerHTML='Password is required*';
    passwordError.style.color = '#2def0fdf';
    };
});

