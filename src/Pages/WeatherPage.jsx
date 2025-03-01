import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import humidity from '../Assets/humidity.png';
import windIcon from '../Assets/wind.png';
import drizzle from '../Assets/drizzle.png';
import rain from '../Assets/rain.png';
import mist from '../Assets/mist.png';
import clear from '../Assets/clear.png';
import clouds from '../Assets/clouds.png';
import DateT from '../Pages/Date/dateT';
import axios from 'axios';

const WeatherPage = () => {
  const [data, setData] = useState({
    celcius: 25,
    description: 'Few Clouds',
    name: 'Colombo',
    humidity: 84,
    speed: 2,
    image: clear 
  });

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWeather('Colombo');
  }, []);

  const fetchWeather = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=687b65438a15dac43046fa1060345ce2&units=metric`;
    axios.get(apiUrl)
      .then(res => {
        let imagePath = clear; 
        switch (res.data.weather[0].main) {
          case "Clouds": imagePath = clouds; break;
          case "Drizzle": imagePath = drizzle; break;
          case "Rain": imagePath = rain; break;
          case "Mist": imagePath = mist; break;
          case "Clear": imagePath = clear; break;
          default: imagePath = clear;
        }

        setData({
          celcius: res.data.main.temp,
          description: res.data.weather[0].description,
          name: res.data.name,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          image: imagePath
        });
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError('City not found');
      });
  };

  const handleClick = () => {
    if (name !== '') {
      fetchWeather(name);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-700 flex flex-col items-center justify-center text-white px-4">
      <h1 className='mb-10 text-5xl bg-blue-400 rounded-2xl px-3 py-2 shadow-lg hover:scale-110 hover:shadow-blue-300'>Weather App</h1>
      <div className="w-full max-w-md bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <input
            className='w-full rounded-full border-2 border-white bg-transparent text-xl px-4 py-2 outline-none placeholder-white' 
            type="text" 
            placeholder='Enter City Name...' 
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button className="bg-white text-black p-2 rounded-full" onClick={handleClick}>
            <SearchIcon />
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <div className="text-center mt-5">
          <img className='w-32 mx-auto' src={data.image} alt='weather' />
          <h1 className="text-5xl font-bold">{Math.round(data.celcius)}°C</h1>
          <h2 className="text-2xl mt-1">{data.name}</h2>
          <p className="italic text-lg">{data.description}</p>
          <DateT/>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex items-center space-x-3">
            <img src={humidity} alt='humidity' className='w-12' />
            <p className='text-lg font-semibold'>Humidity: {Math.round(data.humidity)}%</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={windIcon} alt='wind' className='w-12' />
            <p className='text-lg font-semibold'>Wind: {Math.round(data.speed)} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;