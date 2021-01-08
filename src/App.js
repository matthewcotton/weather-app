import React from "react";
import { WeatherApiClient } from "./WeatherApiClient";
import { GeoApiClient } from "./GeoApiClient";
import SevenDayCards from "./SevenDayCards";
import MyNav from "./MyNav";
import Title from "./Title";
import LocationBlock from "./LocationBlock";
import "./App.css";
import "fontsource-roboto";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: "",
      fetching: false, // Remove if I don't use this variable
      location: [],
    };
    this.weatherApiClient = new WeatherApiClient();
    this.geoApiClient = new GeoApiClient();
  }

  fetchLocation() {
    this.geoApiClient
    .getGeoRev()
    .then((response) => this.updateLocation(response.data.results[0]))
  }

  updateLocation(location) {
    this.setState({
      location,
    })
  }

  fetchWeather() {
    this.setState({
      loading: "loading...",
      fetching: true,
    });

    this.weatherApiClient
      .getWeather()
      .then((response) => this.updateWeather(response.data.daily))
      .finally(() => {
        this.setState({
          loading: "",
          fetching: false,
        });
      });
  }

  updateWeather(weather) {
    this.setState({
      weather,
    });
  }

  componentDidMount() {
    this.fetchWeather();
    this.fetchLocation();
  }

  render() {
    console.log(this.state.location);
    return (
      <div className="App">
        <MyNav />
        <br />
        <Title loadingStatus={this.state.loading} />
        <LocationBlock locationData={this.state.location} />
        <SevenDayCards weatherData={this.state.weather} />
      </div>
    );
  }
}

export default App;
