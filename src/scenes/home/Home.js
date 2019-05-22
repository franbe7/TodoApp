import React, { Component } from "react";
import { View } from "react-native";
import ListTask from "./ListTasks";
import styles from "./Home.styles";
import colors from "src/helpers/Colors";
import { Route } from "src/helpers/Route";


let data = [
  {
    title: 'task1',
    description: 'description of task1',
    id: '1',
    done: false,
  },
  {
    title: 'task2',
    description: 'description of task2',
    id: '2',
    done: false,
  },
  {
    title: 'task3',
    description: 'description of task3',
    id: '3',
    done: false,
  },
];

export class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: colors.clearBlue
    },
    headerTintColor: colors.white,
    headerTitleStyle: styles.text
  };
  
  constructor(props) {
    super(props);
    this.state = {
      tasks: data,
    };
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

  render() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      const idTask = navigation.getParam('idTask');
      this.markAsDone(idTask);
      navigation.state.params = !navigation.state.params;
    }

    const { tasks } = this.state;

    return (
      <View style={styles.listContainer}>
        <ListTask
          tasks={tasks}
          toggleDone={this.toggleDone}
          onPressTask={id => {
            const t = data.find(x => x.id === id);
            navigation.navigate(Route.Details, {
              task: t,
            });
          }}
        />
      </View>
    );
  }
}
