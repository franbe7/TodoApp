import React from 'react';
import { View, Text } from 'react-native';
import ListTask from './ListTasks';
import styles from './Home.styles';

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.header_top} />
        <View style={styles.header_bottom}>
          <Text style={styles.text}>
            TODO
          </Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ListTask />
      </View>
    </View>
  );
}
