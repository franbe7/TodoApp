import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'

import { toggleDone } from 'src/actions'
import { Route } from 'src/helpers/Route'
import { styles } from 'src/scenes/home/Task.styles'

import iconActive from 'src/assets/iconCheckboxActive.png'
import iconInactive from 'src/assets/iconCheckboxInactive.png'

export interface Props {
  url: string
  title: string
  description: string
  completed: boolean
  navigation: NavigationScreenProp<NavigationRoute>
  toggle: (id: string) => void
}

function layoutTask(props: Props) {
  const { url, title, description, completed, navigation, toggle } = props

  const callToggleDone = () => {
    toggle(url)
  }

  const goDetails = () => {
    navigation.navigate(Route.Details, {
      idTask: url,
    })
  }

  return (
    <TouchableOpacity style={styles.item} onPress={goDetails}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <TouchableOpacity style={styles.image} onPress={callToggleDone}>
        <Image source={completed ? iconActive : iconInactive} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  toggle: (id: string) => dispatch(toggleDone(id)),
})

export const Task = connect(
  null,
  mapDispatchToProps,
)(layoutTask)
