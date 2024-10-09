function mySubmit(event) {
  event.preventDefault();

  let user = [];
  const userName = document.getElementById('username').value;
  const email = document.getElementById('email').value; // Corrected 'Email' id
  const password = document.getElementById('password').value;

  const nameError = document.getElementById('nameerrormsg');
  const emailError = document.getElementById('Emailerrormsg'); // Matching with HTML
  const passwordError = document.getElementById('passworderrormsg');

  if (userName === "") {
    nameError.innerHTML = 'Name is required*';
    nameError.style.color = 'red';
  } else {
    nameError.innerHTML = '';
 
  }

  if (email === "") {
    emailError.innerHTML = 'Email is required*';
    emailError.style.color = 'red';
  } else {
    emailError.innerHTML = '';

  }

  if (password === "") {
    passwordError.innerHTML = 'Password is required*';
    passwordError.style.color = 'red';
  } else {
    passwordError.innerHTML = '';
 
  }

  if (userName === "" || email === "" || password === "") {
    return;
  }

  let newUser = { userName, email, password };
  user.push(newUser);
  console.log(user);

  let tableBody =document.getElementById('tableby');
  
  let row =`<tr>
              <td>${userName}</td>
              <td>${email}</td>
              <td>${password}</td>
              <td><button>edit</button> <button>Delete</button></td>
              </tr>`;             
            

   tableBody.innerHTML += row;

  // Clear input fields after submission
  document.getElementById('username').value = "";
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";
}
