import React from "react";
import Grid from "@material-ui/core/Grid";

function TempCardInfo(props) {
  return (
    <Grid container>
      <Grid item xs={6} container direction="column" alignItems="center">
        <Grid item xs>
          Min Temp
        </Grid>
        <Grid item xs>
          {props.weatherInfo.minTemp}
        </Grid>
      </Grid>
      <Grid item xs={6} container direction="column" alignItems="center">
        <Grid item xs>
          Max Temp
        </Grid>
        <Grid item xs>
          {props.weatherInfo.maxTemp}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TempCardInfo;
