import React from "react";
import { WeatherApiClient } from "./WeatherApiClient";
import { GeoApiClient } from "./GeoApiClient";
import { weatherDataProcessing } from "./weatherDataProcessing";
import SevenDayCards from "./SevenDayCards";
import MyNav from "./MyNav";
import Title from "./Title";
import FullDayCard from "./FullDayCard";
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
      placename: "",
      selectedDay: undefined,
      visibilityDays: true,
      visibilityHours: false,
    };
    this.onDayClick = this.onDayClick.bind(this);
    this.onXClick = this.onXClick.bind(this);
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

  onDayClick(id) {
    this.setState({
      selectedDay: id,
      visibilityDays: false,
      visibilityHours: true,
    });
  }

  onXClick() {
    this.setState({
      selectedDay: undefined,
      visibilityDays: true,
      visibilityHours: false,
    });
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
    });
    this.fetchWeather(response.geometry.lat, response.geometry.lng);
  }

  fetchWeather(lat, long) {
    this.weatherApiClient
      .getWeather(lat, long)
      .then((response) => this.updateWeather(response.data));
  }

  updateWeather(weatherData) {
    this.setState({
      weatherData,
      weatherInfo: weatherDataProcessing(weatherData),
    });
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
        {this.state.visibilityDays && (
          <SevenDayCards
            id="seven-day"
            weatherInfo={this.state.weatherInfo}
            onDayClick={this.onDayClick}
          />
        )}
        {this.state.visibilityHours && (
          <FullDayCard
            id="full-day"
            weatherInfo={this.state.weatherInfo[this.state.selectedDay]}
            onXClick={this.onXClick}
          />
        )}
      </div>
    );
  }
}

export default App;
