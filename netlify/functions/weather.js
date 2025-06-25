const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const city = event.queryStringParameters.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'City is required' }),
    };
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return {
        statusCode: data.cod,
        body: JSON.stringify({ error: data.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
