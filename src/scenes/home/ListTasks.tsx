import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'

import { Task } from 'src/scenes/home/Task'
import { Task as typeTask } from 'src/types/global'

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>
  tasks: typeTask[]
}

class ListTasks extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  renderTask = (item: typeTask) => {
    const { navigation } = this.props
    return (
      <Task
        url={item.url}
        title={item.title}
        description={item.description}
        completed={item.completed}
        navigation={navigation}
      />
    )
  }

  render() {
    const { tasks } = this.props
    return (
      <FlatList
        data={tasks}
        renderItem={itemInfo => this.renderTask(itemInfo.item)}
        keyExtractor={item => item.url}
      />
    )
  }
}

export default ListTasks
