import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore (){
  const store = createStore(
    rootReducer, compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  return store;
}

/*
state = {
  search = {
    term: '',
    location: ''
  },
  currentDeck = [],
  currentCard = 0,
  
}
*/
