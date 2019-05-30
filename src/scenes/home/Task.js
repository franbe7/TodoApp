import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./Task.styles";
import iconInactive from "src/assets/iconCheckboxInactive.png";
import iconActive from "src/assets/iconCheckboxActive.png";
import { toggleDone } from "src/actions";
import { Route } from "src/helpers/Route";

function layoutTask(props) {
  const {
    id,
    title,
    description,
    done,
    navigation
  } = props;

  const callToggleDone = () => {
    const { toggleDone } = props;
    toggleDone(id);
  };

  const goDetails = () => {
    navigation.navigate(Route.Details, {
      idTask: id
    })
  }

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={goDetails}
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
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};

export const Task = connect(
  null,
  mapDispatchToProps
)(layoutTask);
