import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Task from './Task';

const data = [
  { title: 'task1', description: 'description of task1' },
  { title: 'task2', description: 'description of task2' },
  { title: 'task3', description: 'description of task3' },
];

class ListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data,
    };
  }

  render() {
    const { tasks } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            description={item.description}
          />
        )}
      />
    );
  }
}

export default ListTasks;
