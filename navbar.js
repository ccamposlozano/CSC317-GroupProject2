// The HTML content being assigned to innerHTML is a template literal (denoted by backticks `). 
// Template literals allow for multi-line strings and could include embedded expressions
document.getElementById('navbar').innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#" onclick="toggleCart()">Cart</a></li>
            <li><a href="#" onclick="showUserProfile()">Profile</a></li>
            <li><a href="#" onclick="showCheckoutPage()">Checkout</a></li>
            <li><a href="#" onclick="toggleAuth()">Login</a></li>
        </ul>
    </nav>
`;
