import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      reandomColor: null
    }
  }

  getRandomColor = () => {
  return (
    "rgb(" +
    Math.floor((Math.random() * 256)) +
    "," +
    Math.floor((Math.random() * 256)) +
    "," +
    Math.floor((Math.random() * 256)) +
    ")"
  )
  }

  myButtonPressed = () => {
    this.setState({ reandomColor: this.getRandomColor() })
  }

  render() {
    return (
      <View
        style={
          [styles.container,
            { backgroundColor: this.state.reandomColor }
          ]
        }>
        <TouchableOpacity
        onPress={this.myButtonPressed}>
          <Text style={styles.text}>Change Color</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    backgroundColor: "#120E43",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white"
  }
});
