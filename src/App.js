import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./constants";
import { capitalizeFirstLetter, useViewportType } from "./utils";
import WeatherSummary from "./components/WeatherSummary";
import Highlights from "./components/Highlights";
import Coords from "./components/Coords";
import Humidity from "./components/Humidity";
import { TextInput, View, Image, Text } from "react-native";
import styles from "./assets/styles/styles";
import SearchIcon from "./assets/img/search.svg";

const App = () => {
  const [city, setCity] = useState("Paris");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const isError = weatherInfo?.cod !== 200;
  const { isMobile, isTablet, isDesktop } = useViewportType();

  const getWeather = () => {
    fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data));
  };

  useEffect(() => {
    getWeather();
  }, []);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      getWeather();
    }
  };

  return (
    <View style={styles.page}>
      <main>
        <View style={styles.container}>
          <View style={styles.laptop}>
            <View
              style={{
                ...styles.sections,
                ...(isTablet ? styles.sectionsTablet : {}),
              }}
            >
              <View
                style={{
                  ...styles.sectionLeft,
                  ...(isTablet ? styles.sectionLeftTablet : {}),
                  ...(isError ? styles.sectionError : {}),
                }}
              >
                <View style={styles.info}>
                  <View style={styles.cityInner}>
                    <TextInput
                      value={city}
                      onChangeText={(text) => setCity(text)}
                      onKeyPress={handleKeyUp}
                      style={styles.search}
                    />
                    <Image source={SearchIcon} style={styles.cityInnerAfter} />
                    <View style={styles.cityInnerAfter} />
                  </View>
                  {!isError ? (
                    <WeatherSummary weatherInfo={weatherInfo} />
                  ) : (
                    <View style={styles.error}>
                      <Text style={styles.errorTitle}>
                        Oooops! Something went wrong
                      </Text>
                      {weatherInfo?.message && (
                        <Text style={styles.errorMessage}>
                          {capitalizeFirstLetter(weatherInfo.message)}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              </View>
              {!isError && (
                <View
                  style={{
                    ...styles.sectionRight,
                    ...(isTablet ? styles.sectionRightTablet : {}),
                  }}
                >
                  <Highlights weatherInfo={weatherInfo} />
                </View>
              )}
            </View>
            {!isError && (
              <View
                style={{
                  ...styles.sections,
                  ...(isTablet ? styles.sectionsTablet : {}),
                }}
              >
                <Coords coord={weatherInfo.coord} />
                <Humidity humidity={weatherInfo.main.humidity} />
              </View>
            )}
          </View>
        </View>
      </main>
    </View>
  );
};

export default App;
