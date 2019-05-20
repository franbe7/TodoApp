import { StyleSheet } from 'react-native';
import colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.clearBlue,
    height: 64,
    flex: 1,
  },
  header_top: {
    flex: 2,
  },
  header_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
  },
  listContainer: {
    flex: 10,
  },
});

export default styles;
