const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Just one puzzle state
let puzzleSolved = false;

// Mark puzzle as solved
app.post('/solve', (req, res) => {
    puzzleSolved = true;
    console.log("Puzzle solved!");
    res.json({ success: true });
});

// Check puzzle state
app.get('/check', (req, res) => {
    res.json({ solved: puzzleSolved });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));