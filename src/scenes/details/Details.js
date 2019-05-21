import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropType from 'prop-types';
import styles1 from '../home/Home.styles';
import styles2 from './Details.styles';
import colors from '../../helpers/Colors';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: colors.clearBlue,
    },
    headerTintColor: colors.white,
    headerTitleStyle: styles1.text,
  }

  render() {
    const { navigation } = this.props;
    const task = navigation.getParam('task');
    return (
      <View style={styles1.listContainer}>
        <View style={styles2.container}>
          <Text style={styles2.title}>
            {task.title}
          </Text>
          <Text style={styles2.description}>
            {task.description}
          </Text>
        </View>
      </View>
    );
  }
}

export default Details;
