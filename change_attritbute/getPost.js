const express = require("express");
const app = express(); // express method called

// const dotenv = require("dotenv");
// dotenv.config();

const PORT = 3000;


// 1. GET method
app.get("/", (req, res) => { res.json({message : "Hello"}); });

app.listen(PORT, () => { console.log(`app is running on port ${PORT}`); });
// is app running or not