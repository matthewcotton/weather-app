import axios from "axios";
import apiKeyGeo from "./apiKeyGeo";

export class GeoApiClient {
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

  getGeoRev() {
    // Scarcroft
    let lat = "53.866291";
    let lon = "-1.458470";
    // Meadowcroft
    // let lat = "52.97015220484259";
    // let lon = "-2.69896787467237";
    return this.getRequest(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${apiKeyGeo()}`
    );
  }

  getGeoFwd() {}
}