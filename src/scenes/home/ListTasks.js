import React, { Component } from "react";
import { FlatList } from "react-native";
import { Task } from "./Task";

class ListTasks extends Component {
  constructor(props) {
    super(props);
  }

  renderTask = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Task
        id={item.id}
        title={item.title}
        description={item.description}
        done={item.done}
        navigation={navigation}
      />
    );
  };

  render() {
    const { tasks } = this.props;
    return (
      <FlatList
        data={tasks}
        renderItem={item => this.renderTask(item)}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default ListTasks;
