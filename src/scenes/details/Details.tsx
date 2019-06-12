import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import colors from 'src/helpers/Colors'
import strings from 'src/helpers/Strings'
import homeStyles from 'src/scenes/home/Home.styles'
import detailStyles from 'src/scenes/details/Details.styles'
import { Task, State } from 'src/types/global'
import { Route } from 'src/helpers/Route'
import { connect } from 'react-redux'
import { Actions } from 'src/actions'
import { Actions as ActionsTypes } from 'src/actions/types'
import { ThunkDispatch } from 'redux-thunk'

export interface Props {
  tasks: Task[]
  navigation: NavigationScreenProp<NavigationRoute>
  toggleDone: (tasks: string) => void
}

class LayoutDetails extends Component<Props> {
  static navigationOptions = {
    title: Route.Details,
    headerStyle: {
      backgroundColor: colors.clearBlue,
    },
    headerTintColor: colors.white,
    headerTitleStyle: homeStyles.text,
  }

  goHome = (id: string, nav: NavigationScreenProp<NavigationRoute>) => () => {
    const { toggleDone } = this.props
    toggleDone(id)
    nav.navigate(Route.Home)
  }

  render() {
    const { navigation, tasks } = this.props
    const idTask: string = navigation.getParam('idTask')
    const sameId: (x: Task) => boolean = x => x.url === idTask
    const task: Task | undefined = tasks.find(sameId)

    return (
      <View style={homeStyles.listContainer}>
        <View style={detailStyles.container}>
          <Text style={detailStyles.notDone}>
            {task && task.completed ? strings.done : strings.notDone}
          </Text>
          <Text style={detailStyles.title}>{task && task.title}</Text>
          <Text style={detailStyles.description}>
            {task && task.description}
          </Text>
          {task && !task.completed && (
            <TouchableOpacity onPress={this.goHome(task.url, navigation)}>
              <View style={detailStyles.markAsDone}>
                <Text style={detailStyles.markAsDone_text}>
                  {strings.markAsDone}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

export interface DispatchToProps {
  toggleDone: (id: string) => void
}

export interface StateToProps {
  tasks: Task[]
}

const mapStateToProps = (state: State): StateToProps => ({
  tasks: state.tasks.tasks,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, {}, ActionsTypes>,
): DispatchToProps => ({
  toggleDone: (id: string) => dispatch(Actions.toggleDone(id)),
})

export const Details = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutDetails)
