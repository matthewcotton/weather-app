import React from "react";
import Grid from "@material-ui/core/Grid";
import HourInfo from "./HourInfo";
import Typography from "@material-ui/core/Typography";

function HourlyCard(props) {
  return (
    <Grid container spacing={1}>
      {props.hourlyWeather.map((hour) => (
        <HourInfo key={hour.hour} hourWeather={hour} />
      ))}
      {!props.hourlyWeather.length && (
        
        <Typography variant="h5" gutterBottom>
          <br />
          Hourly forecast only availble for 48 hours.
        </Typography>
      )}
    </Grid>
  );
}

export default HourlyCard;
