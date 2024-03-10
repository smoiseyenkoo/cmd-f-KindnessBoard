import { config } from 'dotenv';
import express, { json } from "express";
import { boardExists } from './bulletin.js';

const app = express();
const port = 8000;

config();
console.log(process.env.DB_URI);

// get: sends true if the board already exists, false otherwise
app.get("/isBoard/:title", (req, res) => {
    const title = req.params.title;
    boardExists(title).then((isBoard) => {
        res.send(isBoard);
    });
});

// get: returns the location of an existing board

// get: returns all posts on an existing board

// post: creates a board, given a board with that title doesn't already exist

// post: creates a post on an existing board



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
