// Import the necessary modules
import express from 'express';
import { promises as fs } from 'fs';
import pkg from 'pg';
const { Pool } = pkg;

// Create a new pool instance to manage multiple database connections.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
});

// Create an Express application
const app = express();

// Use middleware to parse JSON bodies
app.use(express.json());






// CREATE: Add a new user
app.post('/users', async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await pool.query('INSERT INTO "user" (name) VALUES ($1) RETURNING *', [name]);
        res.status(201).json(newUser.rows[0]);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// READ: Get all users
app.get('/users', async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM "user"');
        res.status(200).json(allUsers.rows);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// READ: Get a single user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM "user" WHERE id = $1', [id]);
        if (user.rows.length === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user.rows[0]);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// UPDATE: Update a user's information
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedUser = await pool.query('UPDATE "user" SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
        res.status(200).json(updatedUser.rows[0]);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// DELETE: Delete a user
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM "user" WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});






// Handle 404 for any other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});
  
  
// Define the port number on which the server will listen for requests
const PORT = 3001;
// Start the server and have it listen on the specified port
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});