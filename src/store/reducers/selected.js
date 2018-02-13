import Maybe from 'data.maybe';
import { createReducer } from 'utils';
import { CREATE_NEW_RECIPE, DELETE_RECIPE, SELECT_RECIPE } from 'store/actions';

const DEFAULT = Maybe.Nothing();
export default createReducer(DEFAULT, {
  [CREATE_NEW_RECIPE]: (_, { payload: id }) => Maybe.Just(id),
  [DELETE_RECIPE]: () => Maybe.Nothing(),
  [SELECT_RECIPE]: (_, { payload: id }) => Maybe.Just(id)
});
