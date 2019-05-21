import React, { Component } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import Task from "./Task";

class ListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    };
  }

  renderTask = ({ item }) => {
    const { onPressTask } = this.props;
    return (
      <Task
        id={item.id}
        title={item.title}
        description={item.description}
        done={item.done}
        toggleDone={(id) => {
          const { tasks } = this.state;
          const auxT = tasks.slice();
          const task = auxT.find(x => x.id === id);
          task.done = !task.done;
          this.setState({
            tasks: auxT,
          });
        }}
        onPress={onPressTask}
      />
    );
  };

  render() {
    const { tasks } = this.state;
    return (
      <FlatList
        data={tasks}
        renderItem={item => this.renderTask(item)}
        keyExtractor={item => item.id}
      />
    );
  }
}

ListTasks.propTypes = {
  onPressTask: PropTypes.func.isRequired
};

export default ListTasks;
