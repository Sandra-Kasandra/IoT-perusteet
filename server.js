const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
// GET endpoint
app.get('/api/sensor', (req, res) => {
    res.json({
        temperature: 22.5,
        humidity: 55,
        status: "OK"
    });
});

// POST endpoint for Pico W
app.post('/api/data', (req, res) => {
  const { temperature, humidity } = req.body;
  console.log('Temperature:', temperature);
  console.log('Humidity:', humidity);
  // to save data
  res.json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});