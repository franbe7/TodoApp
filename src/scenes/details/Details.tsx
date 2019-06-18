import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationScreenComponent,
} from 'react-navigation'
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

const LayoutDetails: NavigationScreenComponent<{}, {}, Props> = (
  props: Props,
) => {
  const { navigation, tasks } = props
  const idTask: string = navigation.getParam('idTask')
  const sameId: (x: Task) => boolean = x => x.url === idTask
  const task: Task | undefined = tasks.find(sameId)
  const goHome = (
    id: string,
    nav: NavigationScreenProp<NavigationRoute>,
  ) => () => {
    const { toggleDone } = props
    toggleDone(id)
    nav.navigate(Route.Home)
  }

  return (
    <View style={homeStyles.listContainer}>
      <View style={detailStyles.container}>
        <Text style={detailStyles.notDone}>
          {task && task.completed ? strings.done : strings.notDone}
        </Text>
        <Text style={detailStyles.title}>{task && task.title}</Text>
        <Text style={detailStyles.description}>{task && task.description}</Text>
        {task && !task.completed && (
          <TouchableOpacity onPress={goHome(task.url, navigation)}>
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

LayoutDetails.navigationOptions = {
  title: Route.Details,
  headerStyle: {
    backgroundColor: colors.clearBlue,
  },
  headerTintColor: colors.white,
  headerTitleStyle: homeStyles.text,
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
