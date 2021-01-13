import React from "react";
import { WeatherApiClient } from "./WeatherApiClient";
import { GeoApiClient } from "./GeoApiClient";
import SevenDayCards from "./SevenDayCards";
import MyNav from "./MyNav";
import Title from "./Title";
import LocationBlock from "./LocationBlock";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import "fontsource-roboto";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: "",
      location: [],
      placename: "Leeds", // Default is Leeds city centre
      lat: "", 
      long: "",
    };
    this.weatherApiClient = new WeatherApiClient();
    this.geoApiClient = new GeoApiClient();
  }

  // Not currently used
  fetchLocation() {
    this.geoApiClient
      .getGeoRev(this.state.lat, this.state.long)
      .then((response) => this.updateLocation(response.data.results[0]));
  }

  // Not currently used
  updateLocation(location) {
    this.setState({
      location,
    });
  }

  searchLocation(placename) {
    this.geoApiClient
      .getGeoFwd(placename)
      .then((response) => this.updateLatLong(response.data.results[0]));
  }

  updateLatLong(response) {
    console.log(response)
    this.setState({
      location: response,
      lat: response.geometry.lat,
      long: response.geometry.lng,
    });
    this.fetchWeather(response.geometry.lat, response.geometry.lng);
  }

  fetchWeather(lat, long) {
    this.setState({
      loading: "loading...",
    });

    this.weatherApiClient
      .getWeather(lat, long)
      .then((response) => this.updateWeather(response.data.daily))
      .finally(() => {
        this.setState({
          loading: "",
        });
      });
  }

  updateWeather(weather) {
    this.setState({
      weather,
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
              locationData={this.state.location}
              onsubmit={(placename) => this.searchLocation(placename)}
            />
          </Grid>
        </Grid>

        <SevenDayCards weatherData={this.state.weather} />
      </div>
    );
  }
}

export default App;
