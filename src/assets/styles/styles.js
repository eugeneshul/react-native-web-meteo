import { StyleSheet } from "react-native";

const primaryColor = "#22609c";
const secondaryColor = "#eef9ff";
const gold = "#ffd347";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: primaryColor,
  },
  container: {
    maxWidth: 1200,
    width: "100%",
    margin: "auto",
    paddingLeft: 12,
    paddingRight: 12,
  },
  laptop: {
    width: "100%",
    padding: 20,
    backgroundColor: secondaryColor,
    borderRadius: 25,
  },
  sections: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    rection: "column",
  },
  sectionsTablet: {
    flexDirection: "column",
  },
  sectionLeft: {
    width: "30%",
    paddingRight: 10,
  },
  sectionLeftTablet: {
    width: "100%",
    paddingRight: 0,
  },
  sectionError: {
    minWidth: 235,
    width: "auto",
    paddingRight: 0,
  },
  info: {
    height: "100%",
    padding: 16,
    backgroundColor: primaryColor,
    borderRadius: 25,
  },
  cityInner: {
    position: "relative",
    display: "inline-block",
    width: "100%",
  },
  cityInnerAfter: {
    position: "absolute",
    top: 0,
    right: 10,
    width: 25,
    height: 25,
    backgroundSize: "contain",
    transform: "translateY(50%)",
    cursor: "pointer",
  },
  search: {
    width: "100%",
    padding: 16,
    fontFamily: '"Inter", Arial, sans-serif',
    color: primaryColor,
    backgroundColor: secondaryColor,
    borderRadius: 16,
    border: "none",
    outlineWidth: "none",
    cursor: "pointer",
  },
  picMain: {
    width: 130,
    height: 130,
    marginTop: 20,
    marginBottom: 12,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  textBlock: {
    position: "relative",
    paddingLeft: 24,
    paddingBottom: 8,
    fontSize: 14,
    color: secondaryColor,
  },
  textBlockBefore: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    marginRight: 6,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  weather: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: secondaryColor,
  },
  temp: {
    paddingBottom: 8,
    fontSize: 32,
    color: secondaryColor,
  },
  weatherDescBefore: {
    position: "absolute",
    left: 2,
    width: 18,
    height: 18,
  },
  cityBefore: {
    position: "absolute",
    left: 2,
    width: 18,
    height: 18,
  },
  dateBefore: {
    position: "absolute",
    left: 2,
    width: 15,
    height: 15,
  },
  error: {
    paddingTop: 20,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: secondaryColor,
  },
  errorMessage: {
    paddingTop: 10,
    fontSize: 13,
    color: secondaryColor,
  },
  sectionRight: {
    width: "70%",
    paddingLeft: 10,
  },
  sectionRightTablet: {
    width: "100%",
    marginTop: 16,
    paddingLeft: 0,
  },
  highlights: {
    paddingTop: 28,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: secondaryColor,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: primaryColor,
  },
  highlightsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  highlightsWrapperMobile: {
    flexDirection: "column",
  },
  highlight: {
    width: "32%",
  },
  highlightMobile: {
    width: "100%",
    marginBottom: 16,
  },
  card: {
    minHeight: 230,
    padding: 16,
    backgroundColor: primaryColor,
    borderRadius: 8,
  },
  cardDesktop: {
    padding: 12,
  },
  cardCentered: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  cardJustify: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  cardTitle: {
    paddingBottom: 12,
    fontSize: 13,
    color: secondaryColor,
  },
  cardTitleDesktop: {
    fontSize: 12,
  },
  cardPic: {
    width: "100%",
    height: 90,
    marginBottom: 16,
    backgroundRepeat: "no-repeat",
    resizeMode: "contain",
  },
  infoMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoMainNum: {
    fontSize: 20,
    color: secondaryColor,
  },
  infoMainNumDesktop: {
    fontSize: 18,
  },
  infoMainText: {
    paddingLeft: 2,
    paddingBottom: 3,
    fontSize: 13,
    color: secondaryColor,
    opacity: 0.6,
  },
  infoMainTextDesktop: {
    paddingBottom: 1.5,
    fontSize: 12,
  },
  states: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statesMargin: {
    marginTop: 40,
  },

  state: {
    width: "40%",
  },
  statePic: {
    width: 20,
    height: 20,
    marginBottom: 6,
    backgroundSize: "cover",
  },
  statePicFlipped: {
    marginLeft: "auto",
    WebkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
  },
  stateTitle: {
    fontSize: 12,
    color: gold,
  },
  stateTime: {
    fontSize: 13,
    fontWeight: 700,
    color: secondaryColor,
  },
  stateTimeDesktop: { fontSize: 11 },
  cardSmall: {
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: primaryColor,
    borderRadius: 8,
  },
  cardSmallTitle: {
    fontSize: 13,
    color: secondaryColor,
  },

  cardSmallInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardSmallInfoDesktop: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardSmallPic: {
    width: 20,
    height: 20,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  cardSmallPicDesktop: { display: "none" },
  cardSmallPicMargin: {
    width: 16,
    height: 16,
    marginBottom: 3,
  },
  cardSmallData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "45%",
  },
  cardSmallDataDesktop: {
    width: "100%",
    paddingTop: 8,
  },
  cardSmallHint: {
    width: "55%",
  },
  cardSmallHintDesktop: { width: "100%" },
  cardSmallText: {
    fontSize: 11,
    color: secondaryColor,
    opacity: 0.6,
  },
  cardSmallTextDesktop: {
    minHeight: 22,
    fontSize: 9,
  },
  title: {
    paddingBottom: 16,
    color: primaryColor,
  },
  sectionBottom: {
    width: "49%",
    marginTop: 16,
  },
  sectionBottomTablet: {
    width: "100%",
  },
  blockBottom: {
    height: "100%",
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: primaryColor,
    borderRadius: 25,
  },
  blockBottomInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  blockBottomInnerMobile: { flexDirection: "column" },
  blockBottomPic: {
    width: "15%",
    height: 70,
    resizeMode: "contain",
    backgroundRepeat: "no-repeat",
    borderRadius: 16,
  },
  blockBottomPicMobile: { width: "30%", marginRight: 0 },
  blockBottomTexts: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingLeft: 20,
  },
  blockBottomTextsMobile: { width: "100%", paddingTop: 16, paddingLeft: 0 },
  blockBottomTitle: {
    paddingBottom: 4,
    fontSize: 15,
    fontWeight: 700,
    color: secondaryColor,
  },
  blockBottomDesc: {
    fontSize: 13,
    color: secondaryColor,
    opacity: 0.6,
  },
});

export default styles;
