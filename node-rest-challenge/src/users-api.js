// user-api.js -> Day 6

const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {id: 1, name: "Seiju", age: 18},
    {id: 2, name: "Seiju", age: 18}
]

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
})

// GET user by id
app.get("/users", (req, res) => {
    const id = Number(req.params.id)
    const users = users.find(u => u.id === id);

    if (!users) {
        return res.status(404).json({ message: "User not found"});
    }

    res.json(users)
});

// CREATE user

app.post("/users", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(404).json({ message: "Name and Age required"})
    }

    const newUser = {
        id: users.length + 1,
        name, 
        age
    };

    users.push(newUser);
    res.status(201).json(newUser);
})

// UPDATE user
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!users) {
        return res.status(404).json({ message: "User not found" })
    };

    const { name, age } = req.body;
    
    if(name) user.name = name;
    if(age) user.age = age

    res.json(user)
});


// DELETE user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = user.findIndex(u => u.id === id)

    if ( index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);
    res.json({ message: "User Deleted"});
});

app.listen(3005, () => {
    console.log("Users API running at: http://localhost:3005");
})