import styles from "../assets/styles/styles";
import HumidityIcon from "../assets/img/humidity.png";
import { Image, View, Text } from "react-native";
import { useViewportType } from "../utils";

const HumiditySection = ({ humidity }) => {
  const { isMobile, isTablet } = useViewportType();
  return (
    <View
      style={{
        ...styles.sectionBottom,
        ...(isTablet ? styles.sectionBottomTablet : {}),
      }}
    >
      <View style={styles.blockBottom}>
        <View
          style={{
            ...styles.blockBottomInner,
            ...(isMobile ? styles.blockBottomInnerMobile : {}),
          }}
        >
          <Image
            source={HumidityIcon}
            style={{
              ...styles.blockBottomPic,
              ...(isMobile ? styles.blockBottomPicMobile : {}),
            }}
          />
          <View
            style={{
              ...styles.blockBottomTexts,
              ...(isMobile ? styles.blockBottomTextsMobile : {}),
            }}
          >
            <Text style={styles.blockBottomTitle}>Humidity: {humidity} %</Text>
            <Text style={styles.blockBottomDesc}>
              Humidity is the concentration of water vapor present in the air.
              Water vapor, the gaseous state of water, is generally invisible to
              the human eye.
              <br />
              <br />
              The same amount of water vapor results in higher relative humidity
              in cool air than warm air.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HumiditySection;
