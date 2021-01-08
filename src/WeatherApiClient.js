import axios from "axios";
import apiKeyOpenWeatherMap from "./apiKey";

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

  getWeather() {
    let lat = "53.866291";
    let lon = "-1.458470";
    let apiKey = apiKeyOpenWeatherMap();
    let exclude = "minutely,hourly,alerts";
    return this.getRequest(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=metric&appid=${apiKey}`
    );
  }
}