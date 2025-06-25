#  WeatherNow

**WeatherNow** is a sleek, modern weather application that fetches real-time weather data using the OpenWeather API. Built with vanilla HTML, CSS, and JavaScript — and powered by a Node.js backend or serverless functions — it delivers quick, clean, and responsive weather updates for any city in the world.

---

## 🚀 Features

-  Search for weather by city
-  Displays city + country info
-  Real-time temperature, weather condition, humidity, and more
-  Responsive design — works on desktop, tablet, and mobile
-  Modal-based Contact Form
-  API key hidden via `.env`
-  Serverless-ready (Vercel compatible)

---
```bash
## 📁 Project Structure
weather-now/
├── netlify/
│   └── functions/
│       └── weather.js      ← Your serverless API function
├── public/
│   │── asset/
│   │   └── icons/
│   │   └── images/
│   └── main/              # HTML, CSS, JS
│       ├── script.js
│       ├── style.css
│       ├── tabStyle.css
│       └── MobileStyle.css
├── .env                   # API key (not pushed)
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── netlify.toml  
├── server.js
└── README.md

```

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express or Vercel functions)
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

---

## License
MIT License — feel free to fork, remix, and build upon it.<br>
Crafted by Garvit.


---

