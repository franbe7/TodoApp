import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./Task.styles";
import iconInactive from "src/assets/iconCheckboxInactive.png";
import iconActive from "src/assets/iconCheckboxActive.png";
import { toggleDone } from "src/actions";

function layoutTask(props) {
  const {
    id,
    title,
    description,
    done
    // onPress,
  } = props;

  const callToggleDone = () => {
    const { toggleDone } = props;
    toggleDone(id);
  };

  return (
    <TouchableOpacity
      style={styles.item}
      // onPress={actionPressTask(id, onPress)}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.image} onPress={callToggleDone}>
        <Image source={done ? iconActive : iconInactive} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleDone(id))
});

layoutTask.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // onPress: PropTypes.func.isRequired,
  // toggleDone: PropTypes.func.isRequired,
  // id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};

export const Task = connect(
  null,
  mapDispatchToProps
)(layoutTask);
