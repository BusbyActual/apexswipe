import React, { Component } from 'react';
import {
  StyleSheet,
  PixelRatio,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Drawer from 'react-native-drawer';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Drawer
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.closedrawer}
          text="Close Drawer"
        >
          <Text>Close Drawer</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#B99BC4',
  },
  container: {
    flex: 1
  },
  controlPanel: {
    flex: 1
  },
  controlPanelText: {
    color:'white',
  },
  controlPanelWelcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    color:'white',
    fontWeight:'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    width: 300,
    height: 75,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  }
});