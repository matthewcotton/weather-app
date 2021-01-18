import React from "react";
import Grid from "@material-ui/core/Grid";
import NavigationIcon from "@material-ui/icons/Navigation";


function WindCardInfo(props) {
  return (
    <Grid item xs={12} container>
      <Grid item xs={6} container direction="column" alignItems="center">
        <Grid item xs>
          Wind Speed
        </Grid>
        <Grid item xs>
          {props.weatherInfo.windSpeed}
        </Grid>
      </Grid>
      <Grid item xs={6} container direction="column" alignItems="center">
        <Grid item xs>
          Wind Direction
        </Grid>
        <Grid item xs>
          N
        </Grid>
        <Grid item xs>
          <NavigationIcon style={{ transform: props.weatherInfo.windDirRot }} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WindCardInfo;
