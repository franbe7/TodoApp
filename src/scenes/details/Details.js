import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

  markAsDone = (id) => {
    const { navigation } = this.props;
    navigation.navigate('Home', {
      idTask: id,
    });
  }

  render() {
    const { navigation } = this.props;
    const task = navigation.getParam('task');
    return (
      <View style={homeStyles.listContainer}>
        <View style={detailStyles.container}>
          <Text style={detailStyles.notDone}>
            {task.done ? 'Done' : 'Not Done'}
          </Text>
          <Text style={detailStyles.title}>{task.title}</Text>
          <Text style={detailStyles.description}>{task.description}</Text>
          {!task.done && 
            <TouchableOpacity onPress={() => this.markAsDone(task.id)}>
            <View style={detailStyles.markAsDone}>
              <Text style={detailStyles.markAsDone_text}>
                MARK AS DONE
              </Text>
            </View>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

export default Details;
