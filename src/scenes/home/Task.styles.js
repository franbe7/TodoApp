import { StyleSheet } from 'react-native';
import colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 14,
    height: 72,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.borderGrey,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.warmGrey,
  },
});

export default styles;
