import { config } from 'dotenv';
import express, { json } from 'express';
import { boardExists, createBoard, getAllBoards, getAllBoardPosts, getBoardLocation, createPost } from './bulletin.js';
import cors from 'cors';

const app = express();
const port = 8000;
app.use(cors());
app.use(
    cors({
        origin: ["http://localhost:3000/", "http://localhost:8000/"]
    })
)
app.use(express.json());

config();

// get: sends true if the board already exists, false otherwise
app.get("/check-board/:title", (req, res) => {
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
    console.log(JSON.stringify(req.body));
    const title = req.params.title;
    const lat = req.body.lat;
    const lon = req.body.lng;
    const board = { title: title, lat: lat, lon: lon };
    console.log(`Obtained new board info: ${board}`);
    createBoard(board).then((success) => {
        res.json({created: success});
    });
});

// post: creates a post on an existing board
app.post("/:title/new-post", (req, res) => {
    const title = req.params.title;
    const post = req.body;
    createPost(title, post).then((success) => {
        res.send({retrieved: success});
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
