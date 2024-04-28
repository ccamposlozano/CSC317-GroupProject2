document.getElementById('navbar').innerHTML = `
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#" onclick="toggleCart()">Cart</a></li>
            <li><a href="#" onclick="showUserProfile()">Profile</a></li>
            <li><a href="#" onclick="showCheckoutPage()">Checkout</a></li>
            <li><a href="#" onclick="toggleAuth()">Login</a></li>
        </ul>
    </nav>
`;
