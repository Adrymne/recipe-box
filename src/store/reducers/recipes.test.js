import subject from './recipes';
import { createNewRecipe, deleteRecipe, updateRecipe } from 'store/actions';

it('CREATE_NEW_RECIPE', () => {
  const state = { existingId: 'blah' };
  const action = createNewRecipe();
  const id = action.payload;

  const result = subject(state, action);

  expect(result).toEqual({
    [id]: { name: '', steps: '', ingredients: '' },
    existingId: 'blah'
  });
});

it('DELETE_RECIPE', () => {
  const state = { id: 'blah', id2: 'blah blah' };
  const action = deleteRecipe('id2');

  const result = subject(state, action);

  expect(result).toEqual({ id: 'blah' });
});

it('UPDATE_RECIPE', () => {
  const state = { id: { name: 'blah', ingredients: 'blah blah' } };
  const action = updateRecipe('id', 'name', 'new name');

  const result = subject(state, action);

  expect(result).toEqual({
    id: { name: 'new name', ingredients: 'blah blah' }
  });
});
