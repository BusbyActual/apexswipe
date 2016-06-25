import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, TouchableHighlight } from 'react-native';

// import components for our routes
import Search from '../containers/searchContainer';
import DeckViewNew from '../containers/deckViewContainer';
import Splash from './splash';
import Results from '../containers/resultsContainer';
import Login from './login';
import Profile from './profile-view';
import Welcome from './welcome-view';
import Friends from './friendsList';
import Saved from './savedDecks';

// This Routes object contains values to route users to on the screen.
const Routes = {
  search: Search,
  deckView: DeckViewNew,
  results: Results,
  splash: Splash,
  login: Login,
  welcome: Welcome,
  friends: Friends,
  saved: Saved
}

export default class Nav extends Component {
  renderScene(route, navigator, splash) {
    const Component = Routes[route.name];
    return <Component route={route} navigator={navigator} splash={splash} />
  }
  
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'splash'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
             <Navigator.NavigationBar
               style={ styles.nav }
               routeMapper={NavigationBarRouteMapper} />
             }
        configureScene={ (route) => {
          if (route.name === 'friends') {
            return Navigator.SceneConfigs.FloatFromLeft;
          } else {
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }}
      />
    )
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    return null
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>ApexSwipe</Text>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop:4,
    fontSize:16
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  }
});