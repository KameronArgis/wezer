import axios from "axios";
import { getForecastUrl } from "./service";

export async function getWeatherByCityName(cityName) {
  const response = await axios.get(getForecastUrl(cityName));

  console.log("weather by city name", response.data);
}
