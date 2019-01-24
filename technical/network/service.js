import { BASE_API_URL } from "./constant";
import { OWM_API_KEY } from "../../config/api";

// Paris Id
export function getForecastUrl(cityID = 6455259) {
  console.log(
    "url to call =>",
    `${BASE_API_URL}?units=metric&id=${cityID}&appid=${OWM_API_KEY}`
  );
  return `${BASE_API_URL}?id=${cityID}&appid=${OWM_API_KEY}`;
}

export function getCities(data) {
  const step = 0;

  const result = data.list.reduce(
    (acc, curr, i) => {
      // Get cities here
    },
    [[], [], [], [], []]
  );
}
