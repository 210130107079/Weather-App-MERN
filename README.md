# Weather App

A responsive weather application built with React, Vite, and Tailwind CSS. The app allows users to search for weather information by city name and displays real-time weather data using the OpenWeatherMap API.

## Features

- **Real-Time Weather Data**: Fetches current weather information such as temperature, humidity, wind speed, and weather description.
- **Dynamic Weather Icons**: Displays weather-specific icons based on the current weather conditions.
- **City Search**: Allows users to search for weather information by entering a city name.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Live Date and Time**: Displays the current date and updates in real-time.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Tailwind CSS**: For styling and responsive design.
- **Axios**: For making API requests.
- **OpenWeatherMap API**: For fetching weather data.
- **date-fns**: For formatting dates.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Weather-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Configuration

- Replace the `appid` in the `fetchWeather` function inside `src/Pages/WeatherPage.jsx` with your OpenWeatherMap API key.

## Project Structure

```
Weather App/
├── src/
│   ├── Pages/
│   │   ├── WeatherPage.jsx
│   │   ├── Date/
│   │   │   └── dateT.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── public/
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
├── .gitattributes
└── README.md
```

## License

This project is licensed under the MIT License.
