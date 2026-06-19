const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Sample Data
let menu = [
    {
        id: 1,
        name: "Espresso",
        price: 120
    },
    {
        id: 2,
        name: "Latte",
        price: 180
    },
    {
        id: 3,
        name: "Cappuccino",
        price: 200
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Brew Haven Coffee API ☕");
});

// GET All Coffees
app.get("/api/menu", (req, res) => {

    res.status(200).json(menu);

});

// GET Coffee By ID
app.get("/api/menu/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const coffee = menu.find(item => item.id === id);

    if (!coffee) {
        return res.status(404).json({
            message: "Coffee Not Found"
        });
    }

    res.status(200).json(coffee);

});

// POST New Coffee
app.post("/api/menu", (req, res) => {

    const { name, price } = req.body;

    // Validation
    if (!name || !price) {
        return res.status(400).json({
            message: "Name and Price are required"
        });
    }

    const newCoffee = {
        id: menu.length + 1,
        name,
        price
    };

    menu.push(newCoffee);

    res.status(201).json({
        message: "Coffee Added Successfully",
        coffee: newCoffee
    });

});

// Start Server
app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});