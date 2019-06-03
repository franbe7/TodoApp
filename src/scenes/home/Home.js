import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import ListTask from "./ListTasks";
import styles from "./Home.styles";
import colors from "src/helpers/Colors";
import { Route } from "src/helpers/Route";
import iconPlus from "src/assets/iconPlus.png";
import strings from "src/helpers/Strings";
import { connect } from "react-redux";
import { clearAllDone } from "src/actions";

class LayoutHome extends Component {
  static navigationOptions = ({ navigation }) => {
    const goNewTask = () => {
      navigation.navigate(Route.NewTask);
    };
    const buttonPlus = (
      <TouchableOpacity style={styles.plus} onPress={goNewTask}>
        <Image source={iconPlus} />
      </TouchableOpacity>
    );
    return {
      title: "Home",
      headerStyle: {
        backgroundColor: colors.clearBlue
      },
      headerTintColor: colors.white,
      headerTitleStyle: styles.text,
      headerRight: buttonPlus
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { tasks } = this.props;
    let shouldUpdate = tasks !== nextProps.tasks;
    return shouldUpdate;
  }

  render() {
    const { clearAllDone, tasks, navigation } = this.props;
    const ButtonClearAll = (
      <TouchableOpacity onPress={clearAllDone}>
        <View style={styles.clearAll_View}>
          <Text style={styles.clearAll_Text}>{strings.clearAll}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <ListTask
            tasks={tasks}
            navigation={navigation}
          />
        </View>
        {tasks.length > 0 && ButtonClearAll}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  clearAllDone: () => dispatch(clearAllDone())
});

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutHome);
