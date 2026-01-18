// route-parameter.js

/**
 * term - meaning
 * req.params - Data sent in the URL as route parameters (dynamic values in the path).
 */

const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

/** 
 * In-memory users data
 * This is a simple array of user objects to simulate a database.
 * Each user has an `id`, `name`, and `age`.
 */
const users = [
    { id:1, name: "seiju", age: 18},
    { id:2, name: "haji", age: 18},
    { id:3, name: "jise", age: 18},
];

// GET all users
app.get("/users", (req, res) => {
    res.json({ users})
});

/**
 * GET user by ID ( route parameter )
 * Example: GET /users/2
 */
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id) // route params are string by dedault
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({error: "User not found"});
    }

    res.json({ user })
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})