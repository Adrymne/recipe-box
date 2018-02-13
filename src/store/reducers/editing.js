import { assoc } from 'ramda';
import { EditField } from 'types';
import { createReducer } from 'utils';
import {
  CREATE_NEW_RECIPE,
  SELECT_RECIPE,
  START_EDIT,
  UPDATE_RECIPE,
  CANCEL_EDIT
} from 'store/actions';

const DEFAULT = { name: false, ingredients: false, steps: false };
const toKey = EditField.case({
  Name: () => 'name',
  Ingredients: () => 'ingredients',
  Steps: () => 'steps'
});

export default createReducer(DEFAULT, {
  [CREATE_NEW_RECIPE]: () => DEFAULT,
  [SELECT_RECIPE]: () => DEFAULT,
  [START_EDIT]: (state, { payload: field }) => assoc(toKey(field), true, state),
  [UPDATE_RECIPE]: (state, { payload: { field } }) =>
    assoc(toKey(field), false, state),
  [CANCEL_EDIT]: (state, { payload: field }) =>
    assoc(toKey(field), false, state)
  // No update on delete - it doesn't matter if another recipe is deleted,
  // and if the current one is removed, edit state will be reset by SELECT or CREATE
});
