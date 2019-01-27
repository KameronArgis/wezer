import { BASE_API_URL } from "./constant";
import { OWM_API_KEY } from "../../config/api";

// Paris Id
export function getForecastUrl(cityID = 6455259) {
  console.log(
    "url to call =>",
    `${BASE_API_URL}?units=metric&id=${cityID}&cnt=7&appid=${OWM_API_KEY}`
  );
  return `${BASE_API_URL}?id=${cityID}&appid=${OWM_API_KEY}`;
}

export function chunkArray(arr, chunkSize) {
  var results = [];

  while (arr.length) {
    results.push(arr.splice(0, chunkSize));
  }

  return results;
}

export function getCities(data) {
  const chunk = 8;

  return chunkArray(data.list, chunk);
}
