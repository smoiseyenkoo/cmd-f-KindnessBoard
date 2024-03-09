const{config} = require('dotenv')

const express = require("express");

const app = express();
const port = 8000;

config();
console.log(process.env.DB_URI);

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
