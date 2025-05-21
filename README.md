# Weather App ☀️🌧️

Aplikacja pogodowa stworzona w React + TypeScript. Pozwala na szybkie sprawdzenie aktualnej pogody w wybranym mieście, korzystając z API OpenWeatherMap. 🌍

## Jak działa aplikacja? 🤔

1. Użytkownik wpisuje nazwę miasta w polu wyszukiwania i zatwierdza. 🏙️
2. Aplikacja pobiera dane pogodowe z OpenWeatherMap API. ☁️
3. Po chwili wyświetlane są szczegółowe informacje o pogodzie: temperatura 🌡️, opis 📝, ikona 🌤️, prędkość wiatru 💨, wilgotność 💧 i ciśnienie 📈.
4. W trakcie pobierania danych widoczny jest animowany loader. ⏳

## Live preview 🚀

Aplikacja jest dostępna online!  
Kliknij link, aby zobaczyć działającą wersję na żywo: https://weatherapptnaf.netlify.app/

## Instrukcja instalacji i uruchomienia 🛠️

1. **Klonowanie repozytorium**  
   ```sh
   git clone https://github.com/Urbaanx/Weather-App.git
   cd weather-app
   ```

2. **Instalacja zależności**  
   ```sh
   npm install
   ```

3. **Konfiguracja klucza API**  
   
    W pliku `.env` ustaw swój klucz API z OpenWeatherMap:  
     ```
     VITE_WEATHER_API_KEY=twoj_klucz_api
     ```

4. **Uruchomienie aplikacji**  
   ```sh
   npm run dev
   ```

## Technologie ⚙️

- React ⚛️
- TypeScript 🟦
- Framer Motion 🎞️
- OpenWeatherMap API 🌐
- ESLint & Prettier 🧹