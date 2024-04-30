/* jomana mahmoud elsaghier ahmed
 20230147*/
 document.getElementById('loginForm').addEventListener('submit', submitLoginForm);

 function submitLoginForm(event) {
     event.preventDefault();
     var storedEmail = localStorage.getItem('email');
     var storedPassword = localStorage.getItem('password');
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     
     var messageBox = document.getElementById('messageBox');
     var messageText = document.getElementById('messageText');
 
     if (email === storedEmail && password === storedPassword) {
         messageText.innerText = 'Login successful!';
     } else {
         messageText.innerText = 'Incorrect email or password.';
     }
     messageBox.style.display = 'block';
 }
 
 document.getElementById('closeBtn').addEventListener('click', function() {
     document.getElementById('messageBox').style.display = 'none';
 });



