import { combineReducers } from 'redux';
import recipes from './recipes';
import selected from './selected';
import editing from './editing';

export default combineReducers({ recipes, selected, editing });
