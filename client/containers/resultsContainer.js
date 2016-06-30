import { connect } from 'react-redux';
import helpers from '../util/helpers';
import SavedComponent from '../components/results';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentDeck: state.currentDeck
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (term) => {dispatch(actions.searchTerm(term))},
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedComponent);