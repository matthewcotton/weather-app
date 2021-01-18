import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DayCard from "./DayCard";

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
        {props.weatherInfo.map((day) => (
          <DayCard key={day.key} weatherInfo={day} onDayClick={props.onDayClick} />
        ))}
      </Grid>
    </div>
  );
}

export default NewWeatherCard;
