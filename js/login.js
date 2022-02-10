document.getElementById('login-submit').addEventListener('click', function () {
    //get user password
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //checking email and password
    if (userEmail == 'ghosh.rj11@gmail.com' && userPassword == '789654rj') {
        window.location.href = 'banking.html';
    }
});
