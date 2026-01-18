// setup.js -> Day 1

/** 
 * Import the Express library.
 * Express is a framework for building web servers in Node.js.
 * Create an instance of an Express application.
 * This `app` object will be used to define routes, middleware, and server behavior.
 * Define the port number the server will listen on.
 * Port 3000 is commonly used for development.
 */
const express = require("express");
const app = express();
const PORT = 3000;


/** 
 * Middleware setup
 * `express.json()` parses incoming requests with JSON payloads.
 * It converts JSON request bodies into JavaScript objects available at `req.body`.
 */
app.use(express.json());


/** 
 * GET /hello Endpoint
 * Defines a route that responds to GET requests at '/hello'.
 * When a client requests this URL, the server responds with a JSON message.
 */
app.get("/hello", (req, res) => {
    res.json({messsage: "Hello from NODE REST API!!!"});
});

// Get /ping
app.get("/ping", (req, res) => {
    res.json({status: "lag", message: "fuck this shit"})
})

/** 
 * Start the server
 * The app listens on the specified PORT.
 * The callback logs a message confirming the server is running.
 */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

