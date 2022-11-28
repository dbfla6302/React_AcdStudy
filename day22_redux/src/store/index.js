import { combineReducers } from 'redux';
import color from './modules/color'
import count from './modules/count'
import changeColor from './modules/changecolor'

export default combineReducers({
    color,
    count,
    changeColor
})