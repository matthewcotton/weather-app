import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewCard from "./NewCard";

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
          <NewCard
            key={day.key}
            dayName={day.nameDay}
            monthDate={day.monthDate}
            icon={day.icon}
            detailedDesc={day.description}
            maxTemp={day.maxTemp}
            minTemp={day.minTemp}
            windSpeed={day.windSpeed}
            windDir={day.windDirRot}
          />
        ))}
      </Grid>
    </div>
  );
}

export default NewWeatherCard;
