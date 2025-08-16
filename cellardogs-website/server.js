const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Store puzzle states in memory (use a real DB in production)
let playerStates = {};

// Mark puzzle as solved
app.post('/solve', (req, res) => {
    const { playerId } = req.body;
    playerStates[playerId] = true;
    console.log(`Player ${playerId} solved puzzle.`);
    res.json({ success: true });
});

// Check puzzle state
app.get('/check', (req, res) => {
    const { playerId } = req.query;
    const solved = !!playerStates[playerId];
    res.json({ solved });
});

app.listen(3000, () => console.log("Server running on https://zero9lives.github.io/cellar-dogs/cellardogs-website/"));