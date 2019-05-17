import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 14,
    height: 72,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#rgb(240,240,240)',
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
    color: '#rgb(149,149,149)',
  },
});

export default function Task(props) {
  const { title, description } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.item}>
      <Text style={styles.title}>
        { title }
      </Text>
      <Text style={styles.description}>
        { description }
      </Text>
    </View>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
