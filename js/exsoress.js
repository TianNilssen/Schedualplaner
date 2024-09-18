const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Mock data - Replace with database integration
let users = [
    { username: 'admin', password: 'admin', role: 'admin', hoursWorked: 0 },
    { username: 'worker1', password: 'password1', role: 'worker', hoursWorked: 10 }
];

let schedules = [
    { date: '2023-10-01', open: true },
    { date: '2023-10-02', open: false }
];

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, user });
    } else {
        res.json({ success: false });
    }
});

// Schedule endpoint
app.get('/api/schedule', (req, res) => {
    res.json(schedules);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});