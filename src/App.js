import React from "react";
import { WeatherApiClient } from "./WeatherApiClient";
import { GeoApiClient } from "./GeoApiClient";
import { weatherDataProcessing } from "./weatherDataProcessing";
import SevenDayCards from "./SevenDayCards";
import MyNav from "./MyNav";
import Title from "./Title";
import LocationBlock from "./LocationBlock";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import "fontsource-roboto";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      weatherInfo: [],
      locationData: [],
      loading: "",
      placename: "Leeds", // Default is Leeds city centre
      // lat: "",
      // long: "",
    };
    this.weatherApiClient = new WeatherApiClient();
    this.geoApiClient = new GeoApiClient();
    toastr.options = {
      closeButton: true,
      positionClass: "toast-top-center",
      timeOut: "3000",
      extendedTimeOut: "1000",
      showEasing: "swing",
    };
    toastr.clear();
  }

  searchLocation(placename) {
    this.setState({
      loading: "loading...",
    });

    this.geoApiClient
      .getGeoFwd(placename)
      .then((response) =>
        response.data.results[0]
          ? this.updateLocation(response.data.results[0])
          : toastr.error(
              `Location ${placename} could not be found`,
              "No Search Results"
            )
      )
      .finally(() => {
        this.setState({
          loading: "",
        });
      });
  }

  updateLocation(response) {
    this.setState({
      locationData: response,
      // lat: response.geometry.lat,
      // long: response.geometry.lng,
    });
    this.fetchWeather(response.geometry.lat, response.geometry.lng);
  }

  fetchWeather(lat, long) {
    this.weatherApiClient
      .getWeather(lat, long)
      .then((response) => this.updateWeather(response.data.daily));
  }

  updateWeather(weatherData) {
    this.setState({
      weatherData,
      weatherInfo: weatherDataProcessing(weatherData),
    });
  }

  componentDidMount() {
    this.searchLocation(this.state.placename);
  }

  render() {
    return (
      <div className="App">
        <MyNav />
        <br />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Title loadingStatus={this.state.loading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocationBlock
              locationData={this.state.locationData}
              onsubmit={(placename) => this.searchLocation(placename)}
            />
          </Grid>
        </Grid>
        <SevenDayCards weatherInfo={this.state.weatherInfo} />
      </div>
    );
  }
}

export default App;
