import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Task from './Task';

const data = [
  { title: 'task1', description: 'description of task1', id: '1' },
  { title: 'task2', description: 'description of task2', id: '2' },
  { title: 'task3', description: 'description of task3', id: '3' },
];

class ListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data,
    };
  }

  renderTask = ({ item }) => (
    <Task
      title={item.title}
      description={item.description}
    />
  )

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

export default ListTasks;
