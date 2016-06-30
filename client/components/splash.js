import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';

export default class SplashComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  navigate(destination) {
    this.props.navigator.push({ name: destination });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('search')}}
           >
            <Text>Search</Text>
          </TouchableHighlight>    
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('deckView')}}
          >
            <Text>Swipe</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('results')}}
          >
            <Text>Results</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.friend}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('friends')}}
          >
            <Text>Friends List</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.saved}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('saved')}}
          >
            <Text>Saved Decks</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    textAlign: 'justify',
    fontFamily: 'Verdana',
    padding: 20,
    fontSize: 30
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 300,
    height: 75,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  },
  friend: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    height: 75,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20
  },
  saved: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    height: 75,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    right: 20
  }
})