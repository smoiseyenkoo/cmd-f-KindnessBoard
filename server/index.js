import { config } from 'dotenv';
import express, { json } from "express";
import { executeBulletinOperations } from './bulletin.js';

const app = express();
const port = 8000;

config();
console.log(process.env.DB_URI);

// get: returns true if the board exists, false
app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] })
});

// get: returns the location of an existing board

// get: returns all posts on an existing board

// post: creates a board, given a board with that title doesn't already exist

// post: creates a post on an existing board



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
