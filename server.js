const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const dotenv = require('dotenv');
const path = require('path');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use('/main', express.static(path.join(__dirname, 'public', 'main')));
app.use('/asset', express.static(path.join(__dirname, 'public', 'asset')));


// API route for weather
app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fallback route to handle client-side routing (SPA support)
app.use((req, res, next) => {
  if (req.path.includes('.')) return next(); // Skip fallback for static files
  res.sendFile(path.join(__dirname, 'public', 'main', 'index.html'));
});
// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
