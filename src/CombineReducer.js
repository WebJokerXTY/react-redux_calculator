import { combineReducers } from 'redux';
import count from './Reducer';
import behaviour from './Reducer2';

const rootReducer = combineReducers({
    count,
    behaviour
})

export default rootReducer;