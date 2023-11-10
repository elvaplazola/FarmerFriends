const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('pg')

app.use(cors(), (bodyParser.json()));

app.get('/getPost', (req, res)=>{
    res.send('Hello World!')
});

// this is where we configure PostgreSQL connection
const pool = new Pool({
    user: '',
    host: 'localhost:3000',
    database: 'postgres',
    password: '',
    port: 5000,
  });
  
  app.use(bodyParser.json());
 
  // Register endpoint
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // this is where we will check if the username is already taken
      const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: 'Username already taken' });
      }
  
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // insert a new user
      await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
