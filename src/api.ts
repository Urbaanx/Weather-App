export async function fetchWeatherData(city: string){

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`);

    if (!response.ok) {
        throw new Error('Błąd podczas pobierania danych pogodowych');
    }

    return response.json();
}