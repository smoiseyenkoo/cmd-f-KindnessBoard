import { config } from 'dotenv';
import express from "express";
import { executeBulletinOperations } from './bulletin.js';

const app = express();
const port = 8000;

config();
console.log(process.env.DB_URI);

await executeBulletinOperations();

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
