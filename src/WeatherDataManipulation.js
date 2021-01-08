import React from "react";
import NewCard from "./NewCard";

function WeatherDataManipulation(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(parseInt(props.dateTime) * 1000);
  const today = new Date(Date.now());
  let nameDay = days[day.getDay(day)];
  const todayName = days[today.getDay(today)];
  nameDay = nameDay === todayName ? "Today" : nameDay;
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[day.getMonth(day)];
  const date = day.getDate(day);
  const monthDate = month + " " + date;
  const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  const description =
    props.detailedDesc[0].toUpperCase() +
    props.detailedDesc.slice(1, props.detailedDesc.length);
  const maxTemp = Math.round(props.maxTemp) + "°C";
  const minTemp = Math.round(props.minTemp) + "°C";
  const windSpeed = Math.round(props.windSpeed * 10) / 10 + "m/s";
  const windDirRot = String("rotate(" + props.windDir + "deg)");

  return (
    <NewCard
      key={props.key}
      dayName={nameDay}
      monthDate={monthDate}
      icon={icon}
      detailedDesc={description}
      maxTemp={maxTemp}
      minTemp={minTemp}
      windSpeed={windSpeed}
      windDir={windDirRot}
    />
  );
}

export default WeatherDataManipulation;
