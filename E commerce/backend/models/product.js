const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Create products table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price REAL,
        imageUrl TEXT,
        stock INTEGER
    )`);
});

async function createProduct(name, description, price, imageUrl, stock) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO products (name, description, price, imageUrl, stock) VALUES (?, ?, ?, ?, ?)', [name, description, price, imageUrl, stock], function(err) {
            if (err) return reject(err);
            resolve({ id: this.lastID, name, description, price, imageUrl, stock });
        });
    });
}

async function getAllProducts() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM products', [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

module.exports = { createProduct, getAllProducts };
