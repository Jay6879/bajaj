import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors';

app.use(cors());
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]+$/.test(item));
    const highestLowercase = alphabets.filter(char => char === char.toLowerCase()).sort().pop();

    const response = {
        is_success: true,
        user_id: "jyoshil_chandana_18062003",  // Replace with dynamic user ID
        email: "srijayanth.21bce8917@vitapstudent.ac.in",     // Replace with actual data
        roll_number: "21bce8917",         // Replace with actual data
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    console.log("POST Response:", response);  // Log the response to the console
    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    const response = { operation_code: 1 };
    console.log("GET Response:", response);  // Log the response to the console
    res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
