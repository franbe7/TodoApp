import React, { Component } from "react";
import colors from "src/helpers/Colors";
import strings from "src/helpers/Strings";
import newTaskStyles from "./NewTask.styles";
import homeStyles from "src/scenes/home/Home.styles";
import { Route } from "src/helpers/Route";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { addTask, onChangeForm, resetForm } from "src/actions";

class LayoutNewTask extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const { addTask, title, description } = params;
    const add = () => {
      if (addTask !== undefined) {
        addTask(title, description);
        navigation.navigate(Route.Home);
      }
    };
    const buttonSave = (
      <TouchableOpacity onPress={add}>
        <Text style={newTaskStyles.buttonSave}>{strings.save}</Text>
      </TouchableOpacity>
    );

    return {
      title: Route.NewTask,
      headerStyle: {
        backgroundColor: colors.clearBlue
      },
      headerTintColor: colors.white,
      headerTitleStyle: homeStyles.text,
      headerRight: buttonSave
    };
  };

  componentDidMount() {
    this.props.resetForm();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { title, description } = this.props;
    let shouldUpdate =
      title !== nextProps.title || description !== nextProps.description;
    return shouldUpdate;
  }

  componentDidUpdate() {
    const { navigation, addTask, resetForm, title, description } = this.props;
    navigation.setParams({
      title,
      description,
      addTask,
      resetForm
    });
  }

  render() {
    const { onChangeForm, title, description } = this.props;
    const setTitle = title => onChangeForm(title, description);
    const setDescription = desc => onChangeForm(title, desc);

    return (
      <View style={newTaskStyles.form}>
        <TextInput
          style={newTaskStyles.titleInput}
          onChangeText={setTitle}
          value={title}
          placeholder={strings.taskTitle}
          multiline={true}
        />
        <TextInput
          style={newTaskStyles.descriptionInput}
          onChangeText={setDescription}
          value={description}
          placeholder={strings.taskDescription}
          multiline={true}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  title: state.formNewTask.title,
  description: state.formNewTask.description
});

const mapDispatchToProps = dispatch => ({
  addTask: (title, description) => dispatch(addTask(title, description)),
  onChangeForm: (title, description) =>
    dispatch(onChangeForm(title, description)),
  resetForm: () => dispatch(resetForm("", ""))
});

export const NewTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutNewTask);
