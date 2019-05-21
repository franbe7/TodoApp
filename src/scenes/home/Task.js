import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './Task.styles';
import iconInactive from '../../../assets/iconCheckboxInactive.png';
import iconActive from '../../../assets/iconCheckboxActive.png';

export const action = (id, onPress) => () => onPress(id);

export default function Task(props) {
  const {
    id,
    title,
    description,
    done,
    toggleDone,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={action(id, onPress)}
    >
      <View>
        <Text style={styles.title}>
          { title }
        </Text>
        <Text style={styles.description}>
          { description }
        </Text>
      </View>
      <TouchableOpacity
        style={styles.image}
        onPress={() => toggleDone(id)}
      >
        <Image
          source={done ? iconActive : iconInactive}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
