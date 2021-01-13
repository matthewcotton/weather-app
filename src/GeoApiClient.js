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

  getGeoRev(lat, lon) {
    return this.getRequest(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${apiKeyGeo()}`
    );
  }

  getGeoFwd(placename) {
    return this.getRequest(
      `https://api.opencagedata.com/geocode/v1/json?q=${placename}&key=${apiKeyGeo()}`
    );
  }
}
