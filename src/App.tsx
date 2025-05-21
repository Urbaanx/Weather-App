import { useState } from 'react';
import './styles/App.css';
import Search from './components/SearchBar';
import Weather from './components/WeatherCard';
import Loader from './components/Loader';
import type { WeatherData } from './types/weather';
import { fetchWeatherData } from './api';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setWeather(null);
    try {
      const data: WeatherData = await fetchWeatherData(city); // Użycie api.ts
      setWeather(data);
    } catch (err) {
      alert('Błąd podczas pobierania danych pogodowych');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Aplikacja pogodowa</h1>
      <Search onSearch={fetchWeather} />
      {loading && <Loader />}
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
