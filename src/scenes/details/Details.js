import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "src/helpers/Colors";
import strings from "src/helpers/Strings";
import homeStyles from "src/scenes/home/Home.styles";
import detailStyles from "./Details.styles";
import { Route } from "src/helpers/Route";
import { connect } from "react-redux";
import { toggleDone } from "src/actions";

class layoutDetails extends Component {
  static navigationOptions = {
    title: Route.Details,
    headerStyle: {
      backgroundColor: colors.clearBlue
    },
    headerTintColor: colors.white,
    headerTitleStyle: homeStyles.text
  };

  goHome = (id, nav) => () => {
    const { toggleDone } = this.props;
    toggleDone(id);
    nav.navigate(Route.Home);
  };

  render() {
    const { navigation, tasks } = this.props;
    const idTask = navigation.getParam("idTask");
    const sameId = x => x.id === idTask;
    const task = tasks.find(sameId);

    return (
      <View style={homeStyles.listContainer}>
        <View style={detailStyles.container}>
          <Text style={detailStyles.notDone}>
            {task.done ? strings.done : strings.notDone}
          </Text>
          <Text style={detailStyles.title}>{task.title}</Text>
          <Text style={detailStyles.description}>{task.description}</Text>
          {!task.done && (
            <TouchableOpacity onPress={this.goHome(task.id, navigation)}>
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

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleDone(id))
});

export const Details = connect(
  mapStateToProps,
  mapDispatchToProps
)(layoutDetails);
