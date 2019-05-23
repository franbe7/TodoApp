import { StyleSheet } from "react-native";
import colors from "src/helpers/Colors";

const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingTop: 31,
    paddingRight: 12,
  },
  titleInput: {
    fontSize: 36,
    lineHeight: 54,
  },
  descriptionInput: {
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 13,
  },
  buttonSave: {
    fontSize: 17,
    letterSpacing: -0.41,
    color: colors.white,
    paddingRight: 12
  }
});

export default styles;