// Get the profile information elements
var usernameElement = document.getElementById('username');
var emailElement = document.getElementById('email');
var addressElement = document.getElementById('address');
var phoneNumberElement = document.getElementById('phone_number');

// Assume we have a function to get the user's profile information from the backend API
function getProfileInfo() {
    // Hardcode the user's profile information
    var profileInfo = {
        username: 'John Smith',
        email: 'johnsmith@example.com',
        address: '123 Main St',
        phone_number: '123-456-7890'
    };

    // Update the profile information elements with the received data
    usernameElement.textContent = profileInfo.username;
    emailElement.textContent = profileInfo.email;
    addressElement.textContent = profileInfo.address;
    phoneNumberElement.textContent = profileInfo.phone_number;
}

// Call the function to get the profile information when the page loads
getProfileInfo();