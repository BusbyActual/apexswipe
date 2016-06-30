import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';

export default class FriendsListComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Friends List</Text>
        <Text>This is where your friends will fill up!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})