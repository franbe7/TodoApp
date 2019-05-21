import { StyleSheet } from "react-native";
import colors from "../../helpers/Colors";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 35,
    paddingBottom: 27,
    justifyContent: "center"
  },
  title: {
    color: colors.black,
    fontSize: 36,
    lineHeight: 54,
    letterSpacing: 0
  },
  description: {
    color: colors.warmGrey,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0
  }
});

export default styles;
