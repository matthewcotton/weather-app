import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"

function Title(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box textAlign="center">
          <Typography variant="h3">7 Day Weather Forecast</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            {props.loadingStatus}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Title;
