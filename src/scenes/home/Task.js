import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View, Image } from "react-native";

import styles from "./Task.styles";
import iconInactive from "src/assets/iconCheckboxInactive.png";
import iconActive from "src/assets/iconCheckboxActive.png";
import { toggleDone } from "src/actions";
import { Route } from "src/helpers/Route";

function LayoutTask(props) {
  const {
    url,
    title,
    description,
    completed,
    navigation
  } = props;

  const callToggleDone = () => {
    const { toggleDone } = props;
    toggleDone(url);
  };

  const goDetails = () => {
    navigation.navigate(Route.Details, {
      idTask: url
    })
  }

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={goDetails}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <TouchableOpacity style={styles.image} onPress={callToggleDone}>
        <Image source={completed ? iconActive : iconInactive} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleDone(id))
});

LayoutTask.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export const Task = connect(
  null,
  mapDispatchToProps
)(LayoutTask);
