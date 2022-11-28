import { combineReducers } from 'redux';
import counter  from './modules/counter'
import colorList  from './modules/colorList'
import todos  from './modules/todos'

export default combineReducers({
    counter,
    colorList,
    todos
});