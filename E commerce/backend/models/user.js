const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./backend/database.sqlite');

// Create users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);
});

async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, username });
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

module.exports = { createUser, findUserByUsername };
