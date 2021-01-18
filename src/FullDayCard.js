import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HourlyHeading from "./HourlyHeading";
import HourlyCard from "./HourlyCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function FullDayCard(props) {
  const classes = useStyles();

  if (props.weatherInfo && props.weatherInfo.hourlyWeather) {
    return (
      <div className={classes.root} style={{ padding: 15 }}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={5}>
              <HourlyHeading
                weatherInfo={props.weatherInfo}
                onXClick={props.onXClick}
              />
              <HourlyCard hourlyWeather={props.weatherInfo.hourlyWeather} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return "";
  }
}

export default FullDayCard;
