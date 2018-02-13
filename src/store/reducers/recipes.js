import { assoc, dissoc, set, lensPath } from 'ramda';
import { createReducer } from 'utils';
import { CREATE_NEW_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from 'store/actions';

const NEW_RECIPE = { name: '', steps: '', ingredients: '' };

const DEFAULT = {};
export default createReducer(DEFAULT, {
  [CREATE_NEW_RECIPE]: (state, { payload: id }) => assoc(id, NEW_RECIPE, state),
  [DELETE_RECIPE]: (state, { payload: id }) => dissoc(id, state),
  [UPDATE_RECIPE]: (state, { payload: { id, field, value } }) =>
    set(lensPath([id, field]), value, state)
});
