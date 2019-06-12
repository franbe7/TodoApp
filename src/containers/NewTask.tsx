import React, { Component } from 'react'
import colors from 'src/helpers/Colors'
import strings from 'src/helpers/Strings'
import newTaskStyles from './NewTask.styles'
import homeStyles from 'src/scenes/home/Home.styles'
import { Route } from 'src/helpers/Route'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'src/actions'
import { NavigationScreenProp } from 'react-navigation'
import { NavigationRoute } from 'react-navigation'
import { State } from 'src/types/global'
import { Dispatch } from 'redux'
import { changeFormAction } from 'src/actions/types'

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>
  title: string
  description: string
  addTask: (title: string, description: string) => void
  onChangeForm: (title: string, description: string) => void
  resetForm: () => void
}

class LayoutNewTask extends Component<Props> {
  static navigationOptions = ({ navigation }: any) => {
    const { params = {} } = navigation.state
    const { addTask, title, description } = params
    const add = () => {
      if (addTask !== undefined) {
        addTask(title, description)
        navigation.navigate(Route.Home)
      }
    }
    const buttonSave = (
      <TouchableOpacity onPress={add}>
        <Text style={newTaskStyles.buttonSave}>{strings.save}</Text>
      </TouchableOpacity>
    )

    return {
      title: Route.NewTask,
      headerStyle: {
        backgroundColor: colors.clearBlue,
      },
      headerTintColor: colors.white,
      headerTitleStyle: homeStyles.text,
      headerRight: buttonSave,
    }
  }

  componentDidMount() {
    this.props.resetForm()
  }

  shouldComponentUpdate(nextProps: Props, nextState?: any) {
    const { title, description } = this.props
    let shouldUpdate =
      title !== nextProps.title || description !== nextProps.description
    return shouldUpdate
  }

  componentDidUpdate() {
    const { navigation, addTask, resetForm, title, description } = this.props
    navigation.setParams({
      title,
      description,
      addTask,
      resetForm,
    })
  }

  render() {
    const { onChangeForm, title, description } = this.props
    const setTitle = (title: string) => onChangeForm(title, description)
    const setDescription = (desc: string) => onChangeForm(title, desc)

    return (
      <View style={newTaskStyles.form}>
        <TextInput
          style={newTaskStyles.titleInput}
          onChangeText={setTitle}
          value={title}
          placeholder={strings.taskTitle}
          multiline={true}
        />
        <TextInput
          style={newTaskStyles.descriptionInput}
          onChangeText={setDescription}
          value={description}
          placeholder={strings.taskDescription}
          multiline={true}
        />
      </View>
    )
  }
}

export interface DispatchToProps {
  addTask: (title: string, description: string) => void
  onChangeForm: (title: string, description: string) => changeFormAction
  resetForm: () => changeFormAction
}

export interface StateToProps {
  title: ''
  description: ''
}

const mapStateToProps = (state: State): StateToProps => ({
  title: state.formNewTask.title,
  description: state.formNewTask.description,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  addTask: (title: string, description: string) =>
    dispatch(Actions.addTask(title, description)),
  onChangeForm: (title: string, description: string) =>
    dispatch(Actions.onChangeForm(title, description)),
  resetForm: () => dispatch(Actions.resetForm('', '')),
})

export const NewTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutNewTask)
