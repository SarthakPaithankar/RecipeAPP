const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const dbConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

const db = pgp(dbConfig);

db.connect()
  .then(obj => {
    console.log('Database Connected Successfully...');
    obj.done(); 
  })
  .catch(error => {
    console.error('Database Connection Error:', error.message || error);
  });

app.get('/', (req, res) => {
    res.json({status: 'success', message: 'Welcome!'});
});

//Example API Route to Fetch Data
app.get('/api/data', async (req, res) => {
  try {
    const data = await db.any('SELECT * FROM users'); // Replace 'your_table' with your actual table name
    //res.json({status: 'success', message: 'Welcome!'});
    res.json(data); // Send data as JSON response
    console.log("sucessfully sent");
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("failed to send");
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
