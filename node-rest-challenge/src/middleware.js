// middleware.js -> day 4
/**

/**
 * term - meaning
 * Middleware - A function that can log, modify, or inspect requests before sending a response.
 * next() - Tells Express to continue to the next middleware or route handler.
 * res.setHeader() - Adds a custom HTTP header to the response.
 */

const express = require("express");
const app = express();
const PORT = 3003;

/** 
 * Custom logging middleware
 * Middleware is a function that runs **before the route handlers**.
 * This middleware logs the date/time, HTTP method, and URL of each request.
 * `next()` is called to pass control to the next middleware or route handler.
 */
app.use((req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
});

app.use(express.json());

/** 
 * Custom header middleware
 * This middleware adds a custom HTTP header `X-POWERED-BY` to every response.
 * `next()` is called to continue to the next middleware or route handler.
 */
app.use((req, res, next) => {
    res.setHeader("X-POWERED-BY", "Node.js MiddleWare API");
    next();
});


app.get("/hello", (req, res) => {
    res.json({ message: "Hello From Middleware API"});
});

/** 
 * POST /echo Endpoint
 * Handles POST requests to '/echo'.
 * Responds with the exact data received in the request body.
 * Demonstrates how middleware (`express.json()`) allows the server to read JSON data.
 */
app.post("/echo", (req, res) => {
    res.json({ received: req.body });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})