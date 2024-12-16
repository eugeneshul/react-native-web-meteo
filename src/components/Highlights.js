import { useMemo } from "react";
import { getPressureMm, getTime, useViewportType } from "../utils";
import { Image, Text, View } from "react-native";
import styles from "../assets/styles/styles";
import EqualizerIcon from "../assets/img/equalizer.png";
import BarometerIcon from "../assets/img/barometer.png";
import SunMovingIcon from "../assets/img/sun-moving.png";
import GustsIcon from "../assets/img/gusts.svg";
import HumidityIcon from "../assets/img/humidity.svg";
import CloudIcon from "../assets/img/cloud.svg";
import SunIcon from "../assets/img/sun.svg";
const Highlights = ({ weatherInfo }) => {
  const timezone = useMemo(() => weatherInfo?.timezone, [weatherInfo]);
  const { isMobile, isDesktop } = useViewportType();

  const sunriseTime = useMemo(() => {
    return getTime(weatherInfo?.sys?.sunrise + timezone);
  }, [weatherInfo, timezone]);

  const sunsetTime = useMemo(() => {
    return getTime(weatherInfo?.sys?.sunset + timezone);
  }, [weatherInfo, timezone]);

  return (
    <View style={{ ...styles.highlights }}>
      <View style={styles.title}>Today's Highlights</View>
      <View
        style={{
          ...styles.highlightsWrapper,
          ...(isMobile ? styles.highlightsWrapperMobile : {}),
        }}
      >
        <View
          style={{
            ...styles.highlight,
            ...(isMobile ? styles.highlightMobile : {}),
          }}
        >
          <View
            style={{ ...styles.card, ...(isDesktop ? styles.cardDesktop : {}) }}
          >
            <Text
              style={{
                ...styles.cardTitle,
                ...(isDesktop ? styles.cardTitleDesktop : {}),
              }}
            >
              Wind
            </Text>
            <Image source={EqualizerIcon} style={styles.cardPic} />
            <View style={styles.cardJustify}>
              <View style={styles.infoMain}>
                <Text
                  style={{
                    ...styles.infoMainNum,
                    ...(isDesktop ? styles.infoMainNumDesktop : {}),
                  }}
                >
                  {weatherInfo?.wind?.speed}
                </Text>
                <Text
                  style={{
                    ...styles.infoMainText,
                    ...(isDesktop ? styles.infoMainTextDesktop : {}),
                  }}
                >
                  m/s
                </Text>
              </View>
              <View style={styles.infoMain}>
                <Text
                  style={{
                    ...styles.infoMainNum,
                    ...(isDesktop ? styles.infoMainNumDesktop : {}),
                  }}
                >
                  {weatherInfo?.wind?.deg}
                </Text>
                <Text
                  style={{
                    ...styles.infoMainText,
                    ...(isDesktop ? styles.infoMainTextDesktop : {}),
                  }}
                >
                  deg
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardSmallTitle}>Wind gusts</Text>
            <View
              style={{
                ...styles.cardSmallInfo,
                ...(isDesktop ? styles.cardSmallInfoDesktop : {}),
              }}
            >
              {weatherInfo?.wind?.gust && (
                <View
                  style={{
                    ...styles.cardSmallData,
                    ...(isDesktop ? styles.cardSmallDataDesktop : {}),
                  }}
                >
                  <Text
                    style={{
                      ...styles.infoMainNum,
                      ...(isDesktop ? styles.infoMainNumDesktop : {}),
                    }}
                  >
                    {Math.round(weatherInfo?.wind?.gust)}
                  </Text>
                  <Text
                    style={{
                      ...styles.infoMainText,
                      ...(isDesktop ? styles.infoMainTextDesktop : {}),
                    }}
                  >
                    m/s
                  </Text>
                </View>
              )}
              <View
                style={{
                  ...styles.cardSmallHint,
                  ...(isDesktop ? styles.cardSmallHintDesktop : {}),
                }}
              >
                <Image
                  source={GustsIcon}
                  style={{
                    ...styles.cardSmallPic,
                    ...(isDesktop ? styles.cardSmallPicDesktop : {}),
                  }}
                />
                <Text
                  style={{
                    ...styles.cardSmallText,
                    ...(isDesktop ? styles.cardSmallTextDesktop : {}),
                  }}
                >
                  Learn
                  <a
                    href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    more{" "}
                  </a>
                  about gusts
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.highlight,
            ...(isMobile ? styles.highlightMobile : {}),
          }}
        >
          <View
            style={{ ...styles.card, ...(isDesktop ? styles.cardDesktop : {}) }}
          >
            <Text
              style={{
                ...styles.cardTitle,
                ...(isDesktop ? styles.cardTitleDesktop : {}),
              }}
            >
              Pressure
            </Text>
            <Image source={BarometerIcon} style={styles.cardPic} />

            <View style={styles.cardCentered}>
              <View style={styles.infoMain}>
                <Text
                  style={{
                    ...styles.infoMainNum,
                    ...(isDesktop ? styles.infoMainNumDesktop : {}),
                  }}
                >
                  {getPressureMm(weatherInfo?.main?.pressure)}
                </Text>
                <Text
                  style={{
                    ...styles.infoMainText,
                    ...(isDesktop ? styles.infoMainTextDesktop : {}),
                  }}
                >
                  mm
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardSmallTitle}>Feels like</Text>
            <View
              style={{
                ...styles.cardSmallInfo,
                ...(isDesktop ? styles.cardSmallInfoDesktop : {}),
              }}
            >
              <View
                style={{
                  ...styles.cardSmallData,
                  ...(isDesktop ? styles.cardSmallDataDesktop : {}),
                }}
              >
                <Text
                  style={{
                    ...styles.infoMainNum,
                    ...(isDesktop ? styles.infoMainNumDesktop : {}),
                  }}
                >
                  {Math.round(weatherInfo?.main?.feels_like)}
                </Text>
                <Text
                  style={{
                    ...styles.infoMainText,
                    ...(isDesktop ? styles.infoMainTextDesktop : {}),
                  }}
                >
                  °C
                </Text>
              </View>
              <View
                style={{
                  ...styles.cardSmallHint,
                  ...(isDesktop ? styles.cardSmallHintDesktop : {}),
                }}
              >
                <Image
                  source={HumidityIcon}
                  style={{
                    ...styles.cardSmallPic,
                    ...(isDesktop ? styles.cardSmallPicDesktop : {}),
                    ...styles.cardSmallPicMargin,
                  }}
                />
                <Text
                  style={{
                    ...styles.cardSmallText,
                    ...(isDesktop ? styles.cardSmallTextDesktop : {}),
                  }}
                >
                  How hot or cold it really feels
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.highlight,
            ...(isMobile ? styles.highlightMobile : {}),
          }}
        >
          <View
            style={{ ...styles.card, ...(isDesktop ? styles.cardDesktop : {}) }}
          >
            <Text
              style={{
                ...styles.cardTitle,
                ...(isDesktop ? styles.cardTitleDesktop : {}),
              }}
            >
              Sunrise and sunset
            </Text>
            <Image source={SunMovingIcon} style={styles.cardPic} />
            <View style={styles.states}>
              <View style={styles.state}>
                <Image source={SunIcon} style={styles.statePic} />
                <Text style={styles.stateTitle}>Sunrise</Text>
                <Text
                  style={{
                    ...styles.stateTime,
                    ...(isDesktop ? styles.stateTimeDesktop : {}),
                  }}
                >
                  {sunriseTime}
                </Text>
              </View>
              <View style={styles.state}>
                <Image
                  source={SunIcon}
                  style={{
                    ...styles.statePic,
                    ...styles.statePicFlipped,
                  }}
                />
                <Text style={{ ...styles.stateTitle, textAlign: "right" }}>
                  Sunset
                </Text>
                <Text
                  style={{
                    ...styles.stateTime,
                    ...(isDesktop ? styles.stateTimeDesktop : {}),
                    textAlign: "right",
                  }}
                >
                  {sunsetTime}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardSmallTitle}>Cloudiness</Text>
            <View
              style={{
                ...styles.cardSmallInfo,
                ...(isDesktop ? styles.cardSmallInfoDesktop : {}),
              }}
            >
              <View
                style={{
                  ...styles.cardSmallData,
                  ...(isDesktop ? styles.cardSmallDataDesktop : {}),
                }}
              >
                <Text
                  style={{
                    ...styles.infoMainNum,
                    ...(isDesktop ? styles.infoMainNumDesktop : {}),
                  }}
                >
                  {weatherInfo?.clouds?.all}
                </Text>
                <Text
                  style={{
                    ...styles.infoMainText,
                    ...(isDesktop ? styles.infoMainTextDesktop : {}),
                  }}
                >
                  %
                </Text>
              </View>
              <View
                style={{
                  ...styles.cardSmallHint,
                  ...(isDesktop ? styles.cardSmallHintDesktop : {}),
                }}
              >
                <Image
                  source={CloudIcon}
                  style={{
                    ...styles.cardSmallPic,
                    ...(isDesktop ? styles.cardSmallPicDesktop : {}),
                  }}
                />
                <Text
                  style={{
                    ...styles.cardSmallText,
                    ...(isDesktop ? styles.cardSmallTextDesktop : {}),
                  }}
                >
                  The sky fraction obscured by clouds
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Highlights;
