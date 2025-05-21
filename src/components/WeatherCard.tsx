import React from 'react';
import type { WeatherData } from '../types/weather';
import { motion } from 'framer-motion';

interface WeatherProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherProps> = ({ data }) => {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="desc">{weather[0].description}</p>
      <div className="details">
        <p>Wiatr: {wind.speed} m/s</p>
        <p>Wilgotność: {main.humidity}%</p>
        <p>Ciśnienie: {main.pressure} hPa</p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
