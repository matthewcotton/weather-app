import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TestImg from "./resources/test-img.jpeg";
import "./App.css";


class WeatherCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="weather-card">
          <CardActionArea>
            <CardMedia
              className="weather-card-img"
              component="img"
              image={TestImg}
              alt="Test Image"
              title="Test Image"
              style={{height: 140, width: 300}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {/* Tuesday  */}
                {this.props.dateTime}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              More Information
            </Button>
          </CardActions>
        </Card>
        <div></div>
      </div>
    );
  }
}

export default WeatherCard;
