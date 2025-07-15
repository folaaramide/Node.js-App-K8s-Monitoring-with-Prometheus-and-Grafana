const express = require('express');
var swStats = require("swagger-stats");
const app = express();

app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/comments", (req, res) => {
    res.send("Comments Read");
});

app.get("/threads", (req, res) => {
    res.send("Threads Created");
});

app.get("/replies", (req, res) => {
    res.send("Replies Given");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
