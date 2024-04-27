/*document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = 'register.html'; 
});*/
/*function submitForm() {
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    var rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('email', emailInput);
        localStorage.setItem('password', passwordInput);
    } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }

    if (emailInput === storedEmail && passwordInput === storedPassword) {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to dashboard upon successful login
    } else {
        alert('Incorrect email or password.');
    }
}*/
document.getElementById('loginForm').addEventListener('submit', submitLoginForm);
function submitLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        // Redirect to the dashboard or desired page
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect email or password.');
    }
}




