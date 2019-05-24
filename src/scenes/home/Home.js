import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import ListTask from "./ListTasks";
import styles from "./Home.styles";
import colors from "src/helpers/Colors";
import { Route } from "src/helpers/Route";
import iconPlus from '../../../assets/iconPlus.png';
import strings from "../../helpers/Strings";

export class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const goNewTask = () => {
      navigation.navigate(Route.NewTask)
    }
    const buttonPlus = (
      <TouchableOpacity style={styles.plus} onPress={goNewTask}
      >
        <Image
          source={iconPlus}
        />
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
  
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      cant: 0,
    };
  }

  addTask = (title, description) => {
    let { cant } = this.state;
    const task = {
      title,
      description,
      id: `${++cant}`,
      done: false
    }
    const tasks = this.state.tasks.slice();
    tasks.push(task);
    this.setState({tasks, cant});
  }

  goNewTask = () => {
    const { navigation } = this.props;
    navigation.navigate(Route.NewTask);
  }

  toggleDone = (id) => {
    const { tasks } = this.state;
    const data = tasks.slice();
    const task = data.find(x => x.id === id);
    task.done = !task.done;
    this.setState({
      tasks: data,
    });
  }

  markAsDone = (id) => {
    const { tasks } = this.state;
    const data = tasks.slice();
    const task = data.find(x => x.id === id);
    task.done = !task.done;
    this.setState({
      tasks: data,
    });
  }

  goDetails = (id) => {
    const { tasks } = this.state;
    const { navigation } = this.props;
    const sameId = (x => x.id === id);
    const t = tasks.find(sameId);
    navigation.navigate(Route.Details, {
      task: t,
    });
  }
  
  clearAllDone = () => {
    const { tasks } = this.state;
    let data = tasks.slice();
    console.log(data);
    data = data.filter(x => !x.done);
    console.log(data);
    this.setState({
      tasks: data
    })
  }

  render() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      const idTask = navigation.getParam('idTask');
      if (idTask) {
        this.markAsDone(idTask);
      };
      const titleTask = navigation.getParam('title');
      if (titleTask) {
        const descriptionTask = navigation.getParam('description');
        this.addTask(titleTask, descriptionTask);
      }
      navigation.state.params = !navigation.state.params
    }

    const { tasks } = this.state;
    const ButtonClearAll = (
      <TouchableOpacity onPress={this.clearAllDone}>
        <View style={styles.clearAll_View}>
          <Text style={styles.clearAll_Text}>
            {strings.clearAll}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <ListTask
            tasks={tasks}
            toggleDone={this.toggleDone}
            onPressTask={this.goDetails}
          />
        </View>
        {tasks.length > 0 && ButtonClearAll}
      </View>
    );
  }
}
