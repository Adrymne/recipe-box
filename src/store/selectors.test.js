import * as sut from './selectors';

describe('getRecipeList', () => {
  const subject = sut.getRecipeList;
  it('no search string', () => {
    const state = {
      recipes: { id1: { name: 'recipe 1' }, id2: { name: 'recipe 2' } },
      search: ''
    };

    const result = subject(state);

    expect(result).toEqual([
      { id: 'id1', name: 'recipe 1' },
      { id: 'id2', name: 'recipe 2' }
    ]);
  });

  it('search string', () => {
    const state = {
      recipes: {
        id1: { name: 'Japanese curry' },
        id2: { name: 'lasagna' },
        id3: { name: 'Indian curry' }
      },
      search: 'cur'
    };

    const result = subject(state);

    expect(result).toEqual([
      { id: 'id1', name: 'Japanese curry' },
      { id: 'id3', name: 'Indian curry' }
    ]);
  });
});
