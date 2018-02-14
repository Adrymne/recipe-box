import { take, drop, evolve, pipe } from 'ramda';
import { Maybe } from 'types';

const STORAGE_KEY = 'recipe_box_state';

const toJson = Maybe.case({
  Just: x => `Just ${JSON.stringify(x)}`,
  Nothing: () => 'Nothing'
});
const fromJson = str =>
  take(4, str) === 'Just'
    ? Maybe.Just(JSON.parse(drop(5, str)))
    : Maybe.Nothing;

const serialize = pipe(evolve({ selected: toJson }), JSON.stringify);
const deserialize = pipe(JSON.parse, evolve({ selected: fromJson }));

export const load = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? deserialize(data) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
export const save = state => {
  try {
    localStorage.setItem(STORAGE_KEY, serialize(state));
  } catch (e) {
    console.error(e);
  }
};
