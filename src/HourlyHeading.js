import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  exit: {
    cursor: "pointer",
  },
}));

function HourlyHeading(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        xs={11}
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
      <Grid
        item
        xs={1}
        container
        justify="flex-end"
        onClick={(e) => {
          e.preventDefault();
          props.onXClick();
        }}
      >
        <CloseIcon className={classes.exit} />
      </Grid>
    </Grid>
  );
}

export default HourlyHeading;
