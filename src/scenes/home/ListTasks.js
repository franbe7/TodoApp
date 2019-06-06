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
        url={item.url}
        title={item.title}
        description={item.description}
        completed={item.completed}
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
        keyExtractor={item => item.url}
      />
    );
  }
}

export default ListTasks;
