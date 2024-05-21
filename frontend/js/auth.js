document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout');
  
    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        });
    }
});
