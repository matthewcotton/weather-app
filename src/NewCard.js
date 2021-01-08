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

  return (
    <Grid item xs={11} sm={6} md={4} lg={3} xl={2}>
      <Paper className={classes.paper} elevation={5}>
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
                {props.dayName}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                {props.monthDate}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                {props.detailedDesc}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container justify="center">
            <Grid item xs={8}>
              <img
                className="weather-icon"
                src={props.icon}
                alt={"Icon for " + props.detailedDesc}
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
                {props.minTemp}
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
                {props.maxTemp}
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
                {props.windSpeed}
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
              <NavigationIcon style={{ transform: props.windDirRot }} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default NewCard;
