import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LocationBlock(props) {
  const classes = useStyles();

  const [placename, setPlacename] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onsubmit(placename);
    setPlacename("");
  };

  return (
    <div className={classes.root} style={{ padding: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box textAlign="center">
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="location-search"
                label="Search"
                type="search"
                value={placename}
                onChange={(e) => setPlacename(e.target.value)}
              />
              <Button variant="outlined" type="submit" value="Submit">
                Search
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="left">
            <Typography className={classes.paper}>
              Current Location:{" " + props.locationData.formatted}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default LocationBlock;
