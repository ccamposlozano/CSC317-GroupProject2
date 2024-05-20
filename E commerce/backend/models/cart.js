const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Create carts and cart_items tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS carts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        FOREIGN KEY (userId) REFERENCES users(id)
    )`);
    
    db.run(`CREATE TABLE IF NOT EXISTS cart_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cartId INTEGER,
        productId INTEGER,
        quantity INTEGER,
        FOREIGN KEY (cartId) REFERENCES carts(id),
        FOREIGN KEY (productId) REFERENCES products(id)
    )`);
});

async function addToCart(userId, productId) {
    return new Promise((resolve, reject) => {
        // Find or create a cart for the user
        db.get('SELECT * FROM carts WHERE userId = ?', [userId], (err, cart) => {
            if (err) {
                console.error('Error finding cart:', err); 
                return reject(err);
            }
            
            if (!cart) {
                // Create a new cart if none exists
                db.run('INSERT INTO carts (userId) VALUES (?)', [userId], function(err) {
                    if (err) {
                        console.error('Error creating cart:', err); 
                        return reject(err);
                    }
                    const cartId = this.lastID;
                    addProductToCart(cartId, productId).then(resolve).catch(reject);
                });
            } else {
                addProductToCart(cart.id, productId).then(resolve).catch(reject);
            }
        });
    });
}

async function getCartItems(userId) {
    return new Promise((resolve, reject) => {
        db.all(`
            SELECT products.name, products.price, cart_items.quantity
            FROM cart_items
            JOIN products ON cart_items.productId = products.id
            JOIN carts ON cart_items.cartId = carts.id
            WHERE carts.userId = ?
        `, [userId], (err, rows) => {
            if (err) {
                console.error('Error fetching cart items:', err); 
                return reject(err);
            }
            console.log('Fetched cart items:', rows); // Log fetched items
            resolve(rows);
        });
    });
}


async function addProductToCart(cartId, productId) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM cart_items WHERE cartId = ? AND productId = ?', [cartId, productId], (err, item) => {
            if (err) return reject(err);
            
            if (item) {
                // Update quantity if the item already exists
                db.run('UPDATE cart_items SET quantity = quantity + 1 WHERE cartId = ? AND productId = ?', [cartId, productId], function(err) {
                    if (err) return reject(err);
                    resolve();
                });
            } else {
                // Add new item to the cart
                db.run('INSERT INTO cart_items (cartId, productId, quantity) VALUES (?, ?, 1)', [cartId, productId], function(err) {
                    if (err) return reject(err);
                    resolve();
                });
            }
        });
    });
}


module.exports = { addToCart, getCartItems };
