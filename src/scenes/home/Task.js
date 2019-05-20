import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './Task.styles';

export default function Task(props) {
  const { title, description } = props;
  return (
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
