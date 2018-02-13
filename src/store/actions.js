import generateId from 'uuid/v4';

export const CREATE_NEW_RECIPE = 'CREATE_NEW_RECIPE';
export const createNewRecipe = () => ({
  type: CREATE_NEW_RECIPE,
  payload: generateId()
});

export const SELECT_RECIPE = 'SELECT_RECIPE';
export const selectRecipe = id => ({ type: 'SELECT_RECIPE', payload: id });

export const START_EDIT = 'START_EDIT';
export const startEdit = field => ({ type: START_EDIT, payload: field });

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const updateRecipe = (id, field, value) => ({
  type: UPDATE_RECIPE,
  payload: { id, field, value }
});

export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = field => ({ type: CANCEL_EDIT, payload: field });

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const deleteRecipe = id => ({ type: DELETE_RECIPE, payload: id });
