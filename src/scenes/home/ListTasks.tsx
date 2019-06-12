import React from 'react'
import { FlatList } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'

import { Task } from 'src/scenes/home/Task'
import { Task as typeTask } from 'src/types/global'

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>
  tasks: typeTask[]
}

export const ListTasks: React.FunctionComponent<Props> = props => {
  const { tasks } = props

  const renderTask = (item: typeTask) => {
    const { navigation } = props
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

  return (
    <FlatList
      data={tasks}
      renderItem={itemInfo => renderTask(itemInfo.item)}
      keyExtractor={item => item.url}
    />
  )
}
