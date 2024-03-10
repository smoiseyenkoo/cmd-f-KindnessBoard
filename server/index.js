import { config } from 'dotenv';
import express, { json } from "express";
import { executeBulletinOperations } from './bulletin.js';

const app = express();
const port = 8000;

config();
console.log(process.env.DB_URI);

const test = {name : "hannah",
text : "hello i am hannah",
number : 1}

await executeBulletinOperations("hi", test);

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
