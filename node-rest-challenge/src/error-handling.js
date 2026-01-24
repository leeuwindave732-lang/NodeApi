// error-handling.js -> Day5

const express = require("express");
const app = express();
const PORT = 3004;

app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({ message: "Hello with error handling" });
});

app.get("/error", (req, res, next) => {
    try {
        throw new Error("Something went wrong!");
    } catch (err) {
        next(err);
    }
});

app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.log("Server error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})