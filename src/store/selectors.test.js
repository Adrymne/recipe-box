import * as sut from './selectors';

it('getRecipes', () => {
  const subject = sut.getRecipes;
  const state = {
    recipes: { id1: { name: 'recipe 1' }, id2: { name: 'recipe 2' } }
  };

  const result = subject(state);

  expect(result).toEqual([
    { id: 'id1', name: 'recipe 1' },
    { id: 'id2', name: 'recipe 2' }
  ]);
});
