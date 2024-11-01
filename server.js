const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/save', (req, res) => {
    const data = req.body;

    fs.writeFile('./public/data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Error writing to file');
        } else {
            res.send('Data saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
