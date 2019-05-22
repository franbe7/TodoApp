import { StyleSheet } from "react-native";
import colors from "../../helpers/Colors";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 18,
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
  },
  notDone: {
    color: colors.strongPink,
    fontSize: 12,
    lineHeight: 16,
  },
  markAsDone_text: {
    color: colors.strongPink,
    fontSize: 14,
    fontWeight: 'bold'
  },
  markAsDone: {
    paddingTop: 27,
    alignSelf: 'center'
  }
});

export default styles;
