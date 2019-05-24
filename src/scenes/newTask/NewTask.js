import React, { Component } from 'react';
import colors from "src/helpers/Colors";
import strings from "src/helpers/Strings";
import newTaskStyles from "src/scenes/newTask/NewTask.styles";
import homeStyles from "src/scenes/home/Home.styles";
import { Route } from "src/helpers/Route";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export class NewTask extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const saveTask = (() => params.saveTask());
    const buttonSave = (
      <TouchableOpacity onPress={saveTask}
      >
        <Text style={newTaskStyles.buttonSave}>
          {strings.save}
        </Text>
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
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      saveTask: this.saveTask
    });
  }

  saveTask = () => {
    const { title, description } = this.state;
    const { navigation } = this.props;
    navigation.navigate(Route.Home, {
      title,
      description
    })
  }

  render() {
    const { title, description } = this.state;
    const setTitle = ((title) => this.setState({title}));
    const setDescription = ((description) => this.setState({description}));

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
    )
  }
}
