import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}


// TODO: Define a class for the Weather object
class Weather {
  forecast: string;
  temperature: number;
  constructor(forecast: string, temperature: number) {
    this.forecast = forecast;
    this.temperature = temperature;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  const properties = {
   baseURL: string,
   apiKey:string,
   cityName: string,} = {
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    apiKey: 'process.env.WEATHER_API_KEY',
    cityName: 'Austin',
  };
  // TODO: Create fetchLocationData method
  async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  async destructureLocationData(locationData: Coordinates) {}
  // TODO: Create buildGeocodeQuery method
  async buildGeocodeQuery(query:string) {}
  // TODO: Create buildWeatherQuery method
  async buildWeatherQuery(coordinates: Coordinates) {}
  // TODO: Create fetchAndDestructureLocationData method
  async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  async parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  async buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {}
}

export default new WeatherService();
