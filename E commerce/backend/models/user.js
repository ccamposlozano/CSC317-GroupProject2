const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./database.sqlite');

// Create users table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT,
        firstName TEXT,
        lastName TEXT
    )`);
});

async function createUser(username, password, email, firstName, lastName) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (username, password, email, firstName, lastName) VALUES (?, ?, ?, ?, ?)', [username, hashedPassword, email, firstName, lastName], function(err) {
            if (err) return reject(err);
            resolve({ id: this.lastID, username, email, firstName, lastName });
        });
    });
}

async function findUserByUsername(username) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
}

async function findUserById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
}

module.exports = { createUser, findUserByUsername, findUserById };
