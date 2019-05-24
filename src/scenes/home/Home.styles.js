import { StyleSheet } from "react-native";
import colors from "../../helpers/Colors";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteFour,
  },
  text: {
    fontWeight: 'bold',
    color: colors.white
  },
  listContainer: {
    backgroundColor: colors.white,
  },
  plus: {
    paddingRight: 16
  },
  clearAll_Text: {
    fontSize: 14,
    lineHeight: 32,
    color: colors.strongPink,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  clearAll_View: {
    paddingTop: 16,
    width: 204,
    alignSelf: 'center',
  }
});

export default styles;
