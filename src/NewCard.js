import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function NewCard(props) {
  const classes = useStyles();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(parseInt(props.dateTime) * 1000);
  const nameDay = days[day.getDay(day)];
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[day.getMonth(day)];
  const date = day.getDate(day);
  const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const description =
    props.detailedDesc[0].toUpperCase() +
    props.detailedDesc.slice(1, props.detailedDesc.length);
  const maxTemp = Math.round(props.maxTemp) + "°C";
  const minTemp = Math.round(props.minTemp) + "°C";
  const windSpeed = Math.round(props.windSpeed * 10) / 10 + "m/s";
  const windDirRot = String("rotate(" + props.windDir + "deg)");

  return (
    <Grid item xs={11} sm={6} md={4} lg={3} xl={2}>
      <Paper className={classes.paper}>
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
              <Typography variant="h5" gutterBottom>
                {nameDay}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                {date + " " + month}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container justify="center">
            <Grid item xs={8}>
              <img
                className="weather-icon"
                src={icon}
                alt={"Icon for " + props.description}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} container direction="column" alignItems="center">
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Min Temp
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {minTemp}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="column" alignItems="center">
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Max Temp
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {maxTemp}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={6} container direction="column" alignItems="center">
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Wind Speed
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {windSpeed}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="column" alignItems="center">
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Wind Direction
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" gutterBottom>
                N
              </Typography>
            </Grid>
            <Grid item xs>
              <NavigationIcon style={{ transform: windDirRot }} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default NewCard;
