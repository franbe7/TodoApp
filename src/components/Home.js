/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: 'red',
  },
  header: {
    backgroundColor: '#rgb(31,134,255)',
    height: 64,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    flex: 10,
  },
});

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={{ flex: 2 }} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.text}>
            TODO
          </Text>
        </View>
      </View>
      <View style={styles.listContainer} />

    </View>
  );
}
