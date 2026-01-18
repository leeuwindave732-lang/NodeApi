// http-methods.js -> Day 2 

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

/** 
 * GET /search Endpoint
 * `app.get()` handles GET requests (used to fetch or read data).
 * The client can send query parameters in the URL, for example:
 *    http://localhost:3001/search?name=Alice&age=25
 * `req.query` contains these values as an object: { name: "Alice", age: "25" }.
 * `res.json()` sends a JSON response back to the client.
 * This route just returns a message confirming the server received the query data.
 */
app.get("/search", (req, res) => {
    const { name, age } = req.query;
    res.json({
        message: "Query Recieved",
        name,
        age,
    });
});

/** 
 * POST /create-user Endpoint
 * `app.post()` handles POST requests (used to send data to the server, like creating something).
 * The client sends JSON data in the request body, for example: { "name": "Bob", "age": 30 }
 * `req.body` contains this data.
 * If `name` or `age` is missing, the server responds with status 400 (bad request) and an error message.
 * If all data is present, the server responds with status 201 (created) and a success message including the user info.
 */
app.post("/create-user", (req, res) => {
    const { name, age } = req.body;
    if (!name || !age ) {
        return res.status(400).json({ error: "Name and age are required "});
    }

    res.status(201).json({
        message: "User created succesfully",
        user: { name, age},
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
