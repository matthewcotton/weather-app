export function weatherDataProcessing(weatherData) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  const today = new Date(Date.now());
  const todayName = days[today.getDay(today)];
  let weatherInfo = [];

  weatherData.daily.slice(0, 7).map((item, i) => {
    // Set key
    const key = i;
    // Calculate name of the day
    const day = new Date(parseInt(item.dt) * 1000);
    let nameDay = days[day.getDay(day)];
    nameDay = nameDay === todayName ? "Today" : nameDay;
    // Calculate name of the month and date
    const month = months[day.getMonth(day)];
    const date = day.getDate(day);
    const monthDate = month + " " + date;
    // Set icon link
    const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    // Set description
    const description =
      item.weather[0].description[0].toUpperCase() +
      item.weather[0].description.slice(1, item.weather[0].description.length);
    // Set max and min temps
    const maxTemp = Math.round(item.temp.max) + "°C";
    const minTemp = Math.round(item.temp.min) + "°C";
    // Set wind speed and wind direction
    const windSpeed = Math.round(item.wind_speed * 10) / 10 + "m/s";
    const windDirRot = String("rotate(" + item.wind_deg + "deg)");

    const hourlyWeather = [];
    if (i < 2) {
      const start = 0 + (i * 24);
      const end = start + 24;
      weatherData.hourly.slice(start, end).map((item, j) => {
        const hour = j;
        const temp = Math.round(item.temp) + "°C";
        const feelsLike = Math.round(item.feels_like) + "°C";
        const windSpeed = Math.round(item.wind_speed * 10) / 10 + "m/s";
        const windDirRot = String("rotate(" + item.wind_deg + "deg)");
        const description =
          item.weather[0].description[0].toUpperCase() +
          item.weather[0].description.slice(
            1,
            item.weather[0].description.length
          );
        const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        hourlyWeather.push({
          hour,
          temp,
          feelsLike,
          windSpeed,
          windDirRot,
          description,
          icon,
        });
      });
    }

    weatherInfo.push({
      key,
      nameDay,
      monthDate,
      icon,
      description,
      maxTemp,
      minTemp,
      windSpeed,
      windDeg: item.wind_deg + "°",
      windDirRot,
      humidity: item.humidity + "%",
      dewPoint: item.dew_point + "°C",
      hourlyWeather,
    });
  });

  return weatherInfo;
}
