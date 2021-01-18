import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function DayHeading(props) {
  return (
    <Grid container>
          <Grid
            item
            xs={6}
            container
            spacing={0}
            direction="column"
            alignItems="flex-start"
          >
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                {props.weatherInfo.nameDay}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                {props.weatherInfo.monthDate}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {props.weatherInfo.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Grid item xs={8}>
              <img
                className="weather-icon"
                src={props.weatherInfo.icon}
                alt={"Icon for " + props.weatherInfo.description}
              />
            </Grid>
          </Grid>
        </Grid>
  )
}

export default DayHeading;