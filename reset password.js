/*function submitForm() {
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    localStorage.setItem('email', email);
    localStorage.setItem('password', newPassword);
    window.location.href = 'login.html';
}*/

function resetPassword(event) {
    event.preventDefault();

    // Get form inputs
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('new Password').value;
    var confirmPassword = document.getElementById('confirm Password').value;

    // Validate passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    localStorage.setItem("password", newPassword);
    alert('Password reset successful!');
        // Redirect to login page
    window.location.href = 'login.html';
}
document.getElementById('resetForm').addEventListener('submit', resetPassword);
