/*function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Store user information (you can use localStorage or send it to a server)
    // For demonstration, I'm using localStorage here
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to the login page
    window.location.href = 'login.html';
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    register(); // Call the register function when the form is submitted
});*/
function storeRegistrationData(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store registration data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Your account has been created.');
    // Redirect to login page
    window.location.href = 'login.html';
}
document.getElementById('registrationForm').addEventListener('submit', storeRegistrationData);