import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import ListTask from "./ListTasks";
import styles from "./Home.styles";
import colors from "src/helpers/Colors";
import { Route } from "src/helpers/Route";
import iconPlus from "src/assets/iconPlus.png";
import strings from "src/helpers/Strings";
import { connect } from "react-redux";

class layoutHome extends Component {
  static navigationOptions = ({ navigation }) => {
    const goNewTask = () => {
      navigation.navigate(Route.NewTask);
    };
    const buttonPlus = (
      <TouchableOpacity style={styles.plus} onPress={goNewTask}>
        <Image source={iconPlus} />
      </TouchableOpacity>
    );
    return {
      title: "Home",
      headerStyle: {
        backgroundColor: colors.clearBlue
      },
      headerTintColor: colors.white,
      headerTitleStyle: styles.text,
      headerRight: buttonPlus
    };
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tasks: [],
  //     cant: 0
  //   };
  // }

  // toggleDone = id => {
  //   const { tasks } = this.state;
  //   const data = tasks.slice();
  //   const task = data.find(x => x.id === id);
  //   task.done = !task.done;
  //   this.setState({
  //     tasks: data
  //   });
  // };

  // markAsDone = id => {
  //   const { tasks } = this.state;
  //   const data = tasks.slice();
  //   const task = data.find(x => x.id === id);
  //   task.done = !task.done;
  //   this.setState({
  //     tasks: data
  //   });
  // };

  // goDetails = id => {
  //   const { tasks } = this.state;
  //   const { navigation } = this.props;
  //   const sameId = x => x.id === id;
  //   const t = tasks.find(sameId);
  //   navigation.navigate(Route.Details, {
  //     task: t
  //   });
  // };

  // clearAllDone = () => {
  //   this.setState({
  //     tasks: this.state.tasks.filter(x => !x.done)
  //   });
  // };

  shouldComponentUpdate(nextProps, nextState) {
    const { tasks } = this.props;
    let shouldUpdate = tasks !== nextProps.tasks;
    return shouldUpdate;
  }

  render() {
    // const { navigation } = this.props;
    // if (navigation.state.params) {
    //   const idTask = navigation.getParam("idTask");
    //   if (idTask) {
    //     this.markAsDone(idTask);
    //   }
    //   navigation.state.params = !navigation.state.params;
    // }

    // const { tasks } = this.state;
    // const ButtonClearAll = (
    //   <TouchableOpacity onPress={this.clearAllDone}>
    //     <View style={styles.clearAll_View}>
    //       <Text style={styles.clearAll_Text}>{strings.clearAll}</Text>
    //     </View>
    //   </TouchableOpacity>
    // );
    return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <ListTask
            tasks={this.props.tasks}
            // toggleDone={this.toggleDone}
            // onPressTask={this.goDetails}
          />
        </View>
        {/* {tasks.length > 0 && ButtonClearAll} */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export const Home = connect(
  mapStateToProps,
  null
)(layoutHome);
