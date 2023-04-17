const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const db = new sqlite3.Database('./myDatabase.db', (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
  
  db.run(`CREATE TABLE IF NOT EXISTS ctdc-services (
    id INTEGER PRIMARY KEY,
    service_name TEXT,
    service_description TEXT,
    service_price INTEGER
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created.');
    }
  });
  