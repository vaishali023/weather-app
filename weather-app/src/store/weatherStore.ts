import create from 'zustand';
import { createStore } from 'zustand';

type Weather = {
    temperature: number;
    description: string;
    icon: string;
}

type WeatherStore = {
    weather: Weather | null;
    fetchWeather: (city: string) => Promise<void>;
}

export const useWeatherStore  = createStore<WeatherStore>()((set) => ({
    weather: null,
    fetchWeather: async (city) => {
      try {
        const apiKey = 'YOUR_OPENWEATHER_API_KEY';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const weather: Weather = {
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        };
        set({ weather });
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    },
}))