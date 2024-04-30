/* jomana mahmoud elsaghier ahmed
 20230147*/
function showMessage(message) {
    var messageBox = document.getElementById('messageBox');
    var messageText = document.getElementById('messageText');
    messageText.innerText = message;
    messageBox.style.display = 'block';
}
function closeMessageBox() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}
var registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showMessage('Passwords do not match.');
        return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    showMessage('Your account has been created.');
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
});
document.getElementById('closeBtn').addEventListener('click', closeMessageBox);
