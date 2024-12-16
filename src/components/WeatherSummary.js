import { capitalizeFirstLetter } from "../utils";
import styles from "../assets/styles/styles";
import { View, Text, Image } from "react-native";
import WeatherIcon from "../assets/img/weather.svg";
import CityIcon from "../assets/img/location.svg";
import CalendarIcon from "../assets/img/calendar.svg";

export default function WeatherSummary({ weatherInfo }) {
  const today = new Date().toLocaleString("en-EN", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View>
      <View
        style={{
          ...styles.picMain,
          backgroundImage: `url("https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png")`,
        }}
      />
      <View style={styles.weather}>
        <Text style={styles.temp}>
          {Math.round(weatherInfo?.main?.temp)} °C
        </Text>
        <Text style={styles.textBlock}>
          <Image source={WeatherIcon} style={styles.weatherDescBefore} />
          {capitalizeFirstLetter(weatherInfo?.weather[0].description)}
        </Text>
      </View>
      <Text style={styles.textBlock}>
        <Image source={CityIcon} style={styles.cityBefore} />
        {weatherInfo?.name},{weatherInfo?.sys?.country}
      </Text>
      <Text style={styles.textBlock}>
        <Image source={CalendarIcon} style={styles.dateBefore} />
        {today}
      </Text>
    </View>
  );
}
