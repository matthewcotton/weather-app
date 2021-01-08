import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WeatherDataManipulation from "./WeatherDataManipulation";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function NewWeatherCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: 15 }}>
      <Grid container spacing={3} justify="center">
        {props.weatherData.slice(0, 7).map((day, i) => (
          <WeatherDataManipulation
            key={i}
            dateTime={day.dt}
            icon={day.weather[0].icon}
            detailedDesc={day.weather[0].description}
            maxTemp={day.temp.max}
            minTemp={day.temp.min}
            windSpeed={day.wind_speed}
            windDir={day.wind_deg}
          />
        ))}
      </Grid>
    </div>
  );
}

export default NewWeatherCard;
