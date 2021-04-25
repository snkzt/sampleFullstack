const express = require('express'); // import express
const app = express(); // initialize express
const cors = require('cors');
const fakeWeatherData = require('./data.js'); 

app.use(cors());

// GET route
app.get('/weather', (req, res) => {
  let cityName = req.query.city.toLowerCase();
  for (let i = 0; i < fakeWeatherData.length; i++) {
    if (!req.query.city) {
      return res.send({"status": "error", "message": "Please enter a city name"});
    } else if (cityName === fakeWeatherData[i].city.toLowerCase()) {
      return res.send(fakeWeatherData[i]);
    }
  }
  res.send({"status":"error", "message": "This city isn't in our database"})
});



// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
});
