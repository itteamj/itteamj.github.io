/*jomana mahmoud elsaghier ahmed
  20230147*/
function resetPassword(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('new Password').value;
    var confirmPassword = document.getElementById('confirm Password').value;
    var messageBox = document.getElementById('messageBox');
    var messageText = document.getElementById('messageText');
    // Validate passwords match
    if (newPassword !== confirmPassword) {
        messageText.innerText = 'Passwords do not match';
        showMessage();
        return;
    }
    localStorage.setItem("password", newPassword);
    messageText.innerText = 'Password reset successful!';
    showMessage();
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}

function showMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
}

document.getElementById('resetForm').addEventListener('submit', resetPassword);
document.getElementById('closeBtn').addEventListener('click', function() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
});
