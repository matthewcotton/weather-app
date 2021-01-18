import axios from "axios";
import apiKeyOpenWeatherMap from "./apiKeyOpenWeatherMap";

export class WeatherApiClient {
  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  getRequest(url) {
    return axios
      .get(url)
      .then(this.status)
      .catch(function (error) {
        // handle error
        console.error(error);
        alert(error);
      });
  }

  getWeather(lat, long) {
    let exclude = "current,minutely,alerts";
    return this.getRequest(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&appid=${apiKeyOpenWeatherMap()}`
    );
  }
}
