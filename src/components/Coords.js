import { Text, View, Image } from "react-native";
import CompassIcon from "../assets/img/compass.png";
import styles from "../assets/styles/styles";
import { useViewportType } from "../utils";

const BottomSection = ({ coord }) => {
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
            source={CompassIcon}
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
            <View>
              <Text style={styles.blockBottomTitle}>
                Longitude: {coord?.lon}
              </Text>
              <Text style={styles.blockBottomDesc}>
                Longitude measures distance east or west of the prime meridian.
              </Text>
            </View>
            <View>
              <Text style={styles.blockBottomTitle}>
                Latitude: {coord?.lat}
              </Text>
              <Text style={styles.blockBottomDesc}>
                Latitude lines start at the equator (0 degrees latitude) and run
                east and west, parallel to the equator.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomSection;
