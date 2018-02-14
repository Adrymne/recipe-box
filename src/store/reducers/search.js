import { createReducer } from 'utils';
import { UPDATE_SEARCH } from 'store/actions';

const DEFAULT = '';
export default createReducer(DEFAULT, {
  [UPDATE_SEARCH]: (store, { payload: searchString }) => searchString
});
