import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function LocationBlock(props) {
  const classes = useStyles();

  //Data Manipulation
  const address = props.locationData.formatted;
  // const hamlet = props.locationData.components.hamlet;

  return (
    <div className={classes.root} style={{ padding: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper} elevation={3}>
            <Box textAlign="left">
              <Typography>Current Location:{" " + address }</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper} elevation={3}>
            <Box textAlign="left">
              <Typography>Search:{" "}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LocationBlock;
