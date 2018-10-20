import {createStore} from 'redux';
import rootReducer from './CombineReducer';

//创建一个全局的store
const store = createStore(rootReducer)

export default store;