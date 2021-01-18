import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function hour(hour) {
  return hour === 0 ? "Now" : "+" + hour + "hr";
}

function HourInfo(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      {props.hourWeather && (
        <Paper className={classes.paper} elevation={2}>
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
                  {hour(props.hourWeather.hour)}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {props.hourWeather.description}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body1" gutterBottom>
                  {props.hourWeather.temp}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container justify="flex-end">
              <Grid item xs={8}>
                <img
                  className="weather-icon"
                  src={props.hourWeather.icon}
                  alt={"Icon for " + props.hourWeather.description}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
}

export default HourInfo;
