import { config } from 'dotenv';
import express, { json } from 'express';
import { boardExists, createBoard, getAllBoards, getAllBoardPosts, getBoardLocation } from './bulletin.js';

const app = express();
const port = 8000;

config();

// get: sends true if the board already exists, false otherwise
app.get("/:title", (req, res) => {
    const title = req.params.title;
    boardExists(title).then((isBoard) => {
        res.send(isBoard);
    });
});

// get: returns the location of an existing board
app.get("/:title/location", (req, res) => {
    const title = req.params.title;
    getBoardLocation(title).then((location) => {
        res.json(location);
    });
});

// get: returns all posts on an existing board
app.get("/:title/posts", (req, res) => {
    const title = req.params.title;
    getAllBoardPosts(title).then((posts) => {
        res.json(posts);
    });
});

// get: returns all board names and locations
app.get("/boards", (req, res) => {
    getAllBoards().then((boards) => {
        res.json(boards);
    });
});

// post: creates a board, given a board with that title doesn't already exist
app.post("/new-board/:title", (req, res) => {
    const title = req.params.title;
    const board = { title: title, lat: req.body.lat, lon: req.body.lng };
    createBoard(title).then((success) => {
        res.send(success);
    });
});

// post: creates a post on an existing board
app.post("/:title/new-post", (req, res) => {
    const title = req.params.title;
    const post = req.body;
    createPost(title, post).then((success) => {
        res.send(success);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
