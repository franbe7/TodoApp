import React, { Component } from "react";
import { View } from "react-native";
import ListTask from "./ListTasks";
import styles from "./Home.styles";
import colors from "src/helpers/Colors";


let data = [
  {
    title: 'task1',
    description: 'description of task1',
    id: '1',
    done: false,
  },
  {
    title: 'task2',
    description: 'description of task2',
    id: '2',
    done: false,
  },
  {
    title: 'task3',
    description: 'description of task3',
    id: '3',
    done: false,
  },
];

export class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: colors.clearBlue
    },
    headerTintColor: colors.white,
    headerTitleStyle: styles.text
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.listContainer}>
        <ListTask
          tasks={data}
          onPressTask={id => {
            const t = data.find(x => x.id === id);
            navigation.navigate("Details", {
              task: t
            });
          }}
        />
      </View>
    );
  }
}
