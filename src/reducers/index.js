import { combineReducers } from 'redux';
import gameSystemReducer from './game-System-Reducer';

const rootReducer = combineReducers({
  gameSystem: gameSystemReducer,
});

export default rootReducer;
