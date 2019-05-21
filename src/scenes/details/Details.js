import React, { Component } from "react";
import { View, Text } from "react-native";
import colors from "src/helpers/Colors";
import homeStyles from "src/scenes/home/Home.styles";
import detailStyles from "./Details.styles";

class Details extends Component {
  static navigationOptions = {
    title: "Details",
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
          <Text style={detailStyles.title}>{task.title}</Text>
          <Text style={detailStyles.description}>{task.description}</Text>
        </View>
      </View>
    );
  }
}

export default Details;
