import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './Task.styles';

export default function Task(props) {
  const {
    id,
    title,
    description,
    onPress,
  } = props;

  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(id)}>
      <Text style={styles.title}>
        { title }
      </Text>
      <Text style={styles.description}>
        { description }
      </Text>
    </TouchableOpacity>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
