import React from "react";
import SevenDayCards from "./SevenDayCards";
// import CssBaseline from "@material-ui/core/CssBaseline"; // Is this useful?
import "./App.css";
import "fontsource-roboto";
import { WeatherApiClient } from "./WeatherApiClient";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loading: "",
      fetching: false, // Remove if I don't use this variable
    };
    this.weatherApiClient = new WeatherApiClient();
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

  updateWeather(response) {
    this.setState({
      weather: response,
    });
  }

  componentDidMount() {
    this.fetchWeather();
  }

  render() {
    console.log(this.state.weather);
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Typography variant="h2">7 Day Weather Forecast</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Typography variant="h5" gutterBottom>
                {this.state.loading}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <SevenDayCards weatherData={this.state.weather} />
      </div>
    );
  }
}

export default App;
