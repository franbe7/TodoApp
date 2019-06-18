import React, { useEffect, useState } from 'react'
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
import { Dispatch } from 'redux'
import { NavigationScreenComponent } from 'react-navigation'

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>
  title: string
  description: string
  addTask: (title: string, description: string) => void
}

const LayoutNewTask: NavigationScreenComponent<{}, {}, Props> = (
  props: Props,
) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setTitle(''), setDescription('')
  }, [])

  useEffect(() => {
    const { navigation, addTask } = props
    navigation.setParams({
      title,
      description,
      addTask,
    })
  }, [title, description])

  return (
    <View style={newTaskStyles.form}>
      <TextInput
        style={newTaskStyles.titleInput}
        onChangeText={(text: string) => setTitle(text)}
        value={title}
        placeholder={strings.taskTitle}
        multiline={true}
      />
      <TextInput
        style={newTaskStyles.descriptionInput}
        onChangeText={(text: string) => setDescription(text)}
        value={description}
        placeholder={strings.taskDescription}
        multiline={true}
      />
    </View>
  )
}

LayoutNewTask.navigationOptions = ({ navigation }) => {
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

export interface DispatchToProps {
  addTask: (title: string, description: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  addTask: (title: string, description: string) =>
    dispatch(Actions.addTask(title, description)),
})

export const NewTask = connect(
  null,
  mapDispatchToProps,
)(LayoutNewTask)
