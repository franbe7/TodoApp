import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'
import { clearAllDone, getTasks } from 'src/actions'
import colors from 'src/helpers/Colors'
import { Route } from 'src/helpers/Route'
import strings from 'src/helpers/Strings'
import { Task } from 'src/types/task'
import styles from 'src/scenes/home/Home.styles'
import ListTask from 'src/scenes/home/ListTasks'
import iconPlus from 'src/assets/iconPlus.png'

export interface Props {
  cant: number
  tasks: Task[]
  navigation: NavigationScreenProp<NavigationRoute>
  clearAllDone: (tasks: Task[]) => void
  getTasks: () => void
}

class LayoutHome extends Component<Props> {
  public static navigationOptions = ({ navigation }: any) => {
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

  public componentDidMount() {
    const { getTasks } = this.props
    getTasks()
  }

  public render() {
    const { clearAllDone, tasks, cant, navigation } = this.props
    const tasksDone = tasks.filter(x => x.completed)
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
          <ListTask tasks={tasks} /* cant={cant} */ navigation={navigation} />
        </View>
        {tasks && tasks.length > 0 && ButtonClearAll}
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  tasks: state.tasks.tasks,
  cant: state.tasks.cant,
})

const mapDispatchToProps = (dispatch: any) => ({
  clearAllDone: (tasks: Task[]) => dispatch(clearAllDone(tasks)),
  getTasks: () => dispatch(getTasks()),
})

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutHome)
