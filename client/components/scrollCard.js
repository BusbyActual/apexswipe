import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity, 
  StyleSheet,
  Linking,
  Image
} from 'react-native';

export default class ScrollCard extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    const { card, position } = this.props;
    const style = position === 0 ? [styles.card, styles.top] : styles.card;
    return (
      <View style={style}>
        <View>
          <Image style={styles.img} source={{uri:card.image_url}} />
        </View>
        
        <View style={styles.description}>
          <Text>{ card.name }</Text>
          <Image style={styles.rating} source={{uri:card.rating_img_url}} />
          <Text>{ card.review_count } Reviews</Text>
          <TouchableOpacity
            style={{height: 40}}
            onPress={() => { Linking.openURL(card.url).catch(err => console.error('An error occurred', err)) }}
           >
            <Text>Check Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card:  {
    flexDirection: 'row', 
    height: 200,
    margin: 7,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    alignItems: 'stretch',
  },
  top: {
    borderWidth: 3,
    borderColor: '#e6e600',
  },
  img: {
    width: 175,
    height: 175,
    borderRadius: 5,
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 10
  },
  rating: {
    width: 84, 
    height: 17,
  }
});