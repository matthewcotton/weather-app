import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Title(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.paper}>
          <Typography variant="h3">7 Day Weather Forecast</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            {props.loadingStatus}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Title;
