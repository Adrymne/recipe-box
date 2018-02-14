import subject from './editing';
import {
  createNewRecipe,
  selectRecipe,
  startEdit,
  updateRecipe,
  cancelEdit
} from 'store/actions';
import { EditField } from 'types';

it('CREATE_NEW_RECIPE', () => {
  const state = 'blah';
  const action = createNewRecipe();

  const result = subject(state, action);

  expect(result).toEqual({ name: false, steps: false, ingredients: false });
});

it('SELECT_RECIPE', () => {
  const state = 'blah';
  const action = selectRecipe('blah blah');

  const result = subject(state, action);

  expect(result).toEqual({ name: false, steps: false, ingredients: false });
});

it('START_EDIT', () => {
  const state = { name: false, steps: false, ingredients: false };
  const action = startEdit(EditField.Name);

  const result = subject(state, action);

  expect(result).toEqual({ name: true, steps: false, ingredients: false });
});

it('UPDATE_RECIPE', () => {
  const state = { name: true, steps: true, ingredients: false };
  const action = updateRecipe('blah', EditField.Steps, 'blah blah');

  const result = subject(state, action);

  expect(result).toEqual({ name: true, steps: false, ingredients: false });
});

it('CANCEL_EDIT', () => {
  const state = { name: true, steps: false, ingredients: true };
  const action = cancelEdit(EditField.Ingredients);

  const result = subject(state, action);

  expect(result).toEqual({ name: true, steps: false, ingredients: false });
});
