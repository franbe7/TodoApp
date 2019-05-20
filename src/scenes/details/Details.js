import React from 'react';
import { View, Text } from 'react-native';
import styles1 from '../home/Home.styles';
import styles2 from './Details.styles';

export default function Details() {
  return (
    <View style={styles1.mainContainer}>
      <View style={styles1.header}>
        <View style={styles1.header_top} />
        <View style={styles1.header_bottom}>
          <Text style={styles1.text}>
            DETAILS
          </Text>
        </View>
      </View>
      <View style={styles1.listContainer}>
        <View style={styles2.container}>
          <Text style={styles2.title}>
            Title of Task
          </Text>
          <Text style={styles2.description}>
            This is the description tasks bla bla bla bla bla bla bla
          </Text>
        </View>
      </View>
    </View>
  );
}
