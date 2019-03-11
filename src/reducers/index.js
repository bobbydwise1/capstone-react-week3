import gameSystemReducer from './gameSystemreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  gameSystem: gameSystemReducer,
});

export default rootReducer;
