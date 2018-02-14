import { combineReducers } from 'redux';
import recipes from './recipes';
import selected from './selected';
import editing from './editing';
import search from './search';

export default combineReducers({ recipes, selected, editing, search });
