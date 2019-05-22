import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "src/helpers/Colors";
import strings from "src/helpers/Strings";
import homeStyles from "src/scenes/home/Home.styles";
import detailStyles from "./Details.styles";
import { Route } from "src/helpers/Route";

export const goHome = (id, nav) => () => {
  nav.navigate(Route.Home, {
    idTask: id
  });
};

class Details extends Component {
  static navigationOptions = {
    title: Route.Details,
    headerStyle: {
      backgroundColor: colors.clearBlue
    },
    headerTintColor: colors.white,
    headerTitleStyle: homeStyles.text
  };

  render() {
    const { navigation } = this.props;
    const task = navigation.getParam("task");
    return (
      <View style={homeStyles.listContainer}>
        <View style={detailStyles.container}>
          <Text style={detailStyles.notDone}>
            {task.done ? strings.done : strings.notDone}
          </Text>
          <Text style={detailStyles.title}>{task.title}</Text>
          <Text style={detailStyles.description}>{task.description}</Text>
          {!task.done && (
            <TouchableOpacity onPress={goHome(task.id, navigation)}>
              <View style={detailStyles.markAsDone}>
                <Text style={detailStyles.markAsDone_text}>
                  {strings.markAsDone}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Details;
