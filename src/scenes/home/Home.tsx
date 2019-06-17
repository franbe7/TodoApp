import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationScreenProps,
  NavigationScreenComponent,
} from 'react-navigation'
import { connect } from 'react-redux'
import { Actions } from 'src/actions'
import colors from 'src/helpers/Colors'
import { Route } from 'src/helpers/Route'
import strings from 'src/helpers/Strings'
import { Task, State } from 'src/types/global'
import styles from 'src/scenes/home/Home.styles'
import { ListTasks } from 'src/scenes/home/ListTasks'
import iconPlus from 'src/assets/iconPlus.png'
import { Dispatch } from 'redux'

export interface Props extends NavigationScreenProps {
  cant: number
  tasks: Task[]
  navigation: NavigationScreenProp<NavigationRoute>
  clearAllDone: (tasks: Task[]) => void
  getTasks: () => void
}

const LayoutHome: NavigationScreenComponent<{}, {}, Props> = (props: Props) => {
  useEffect(() => {
    props.getTasks()
  }, [])

  const { clearAllDone, tasks, navigation } = props
  const tasksDone = tasks.filter(task => task.completed)
  const ButtonClearAll = (
    <TouchableOpacity onPress={() => clearAllDone(tasksDone)}>
      <View style={styles.clearAll_View}>
        <Text style={styles.clearAll_Text}>{strings.clearAll}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <ListTasks tasks={tasks} navigation={navigation} />
      </View>
      {tasks && tasks.length > 0 && ButtonClearAll}
    </View>
  )
}

LayoutHome.navigationOptions = ({ navigation }) => {
  const goNewTask = () => {
    navigation.navigate(Route.NewTask)
  }
  const buttonPlus = (
    <TouchableOpacity style={styles.plus} onPress={goNewTask}>
      <Image source={iconPlus} />
    </TouchableOpacity>
  )
  return {
    title: 'Home',
    headerStyle: {
      backgroundColor: colors.clearBlue,
    },
    headerTintColor: colors.white,
    headerTitleStyle: styles.text,
    headerRight: buttonPlus,
  }
}

export interface DispatchToProps {
  clearAllDone: (tasks: Task[]) => void
  getTasks: () => void
}

export interface StateToProps {
  tasks: Task[]
}

const mapStateToProps = (state: State): StateToProps => ({
  tasks: state.tasks.tasks,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  clearAllDone: (tasks: Task[]) => dispatch(Actions.clearAllDone(tasks)),
  getTasks: () => dispatch(Actions.getTasks()),
})

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutHome)
