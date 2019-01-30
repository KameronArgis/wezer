import * as React from "react";
import Sun from "../icons/weather/sun";
import Rain from "../icons/weather/rain";
import SunClound from "../icons/weather/sun-cloud";
import Cloud from "../icons/weather/cloud";
import Thunder from "../icons/weather/thunder";

function WeatherIcon({ type, ...props }) {
  switch (type) {
    case "sun":
      return <Sun {...props} />;
    case "rain":
      return <Rain {...props} />;
    case "sun_cloud":
      return <SunClound {...props} />;
    case "cloud":
      return <Cloud {...props} />;
    case "thunder":
      return <Thunder {...props} />;
    default:
      return <Sun {...props} />;
  }
}

export default WeatherIcon;
