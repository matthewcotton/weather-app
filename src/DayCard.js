import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DayHeading from "./DayHeading";
import TempCardInfo from "./TempCardInfo";
import WindCardInfo from "./WindCardInfo";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
}));

function DayCard(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={11}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      onClick={(e) => {
        e.preventDefault();
        props.onDayClick(props.weatherInfo.key);
      }}
    >
      <Paper className={classes.paper} elevation={5}>
        <DayHeading weatherInfo={props.weatherInfo} />
        <TempCardInfo weatherInfo={props.weatherInfo} />
        <WindCardInfo weatherInfo={props.weatherInfo} />
      </Paper>
    </Grid>
  );
}

export default DayCard;
