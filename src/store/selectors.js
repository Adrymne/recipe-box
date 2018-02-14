import fuzzysearch from 'fuzzysearch';
import { toPairs, map, converge, ifElse, filter } from 'ramda';
import { EditField, Maybe } from 'types';
/*
alias Id = String
Recipe = {
  name :: String,
  ingredients :: String,
  steps :: String
}
EditField = Name | Ingredients | Steps

State :: {
  recipes :: Dict Id Recipe,
  selected :: Maybe Id,
  editing :: Dict EditField Bool,
  search :: String
}

RecipeList = [{ id :: Id } & Recipe]
*/

// getSelectedRecipeId :: State -> Maybe Id
export const getSelectedRecipeId = state => state.selected;

// getSearchString :: State -> String
export const getSearchString = state => state.search;

// getRecipes :: State -> RecipeList
const getRecipes = state =>
  map(([id, recipe]) => ({ id, ...recipe }), toPairs(state.recipes));
// searchStringExists :: (String, RecipeList) -> Bool
const searchStringExists = ss => !!ss;
// filterBySearch :: (String, RecipeList) -> RecipeList
const filterBySearch = (searchString, recipes) =>
  filter(({ name }) => fuzzysearch(searchString, name), recipes);
// getRecipeList :: State -> [{ id :: Id } & Recipe]
export const getRecipeList = converge(
  ifElse(searchStringExists, filterBySearch, (_, recipes) => recipes),
  [getSearchString, getRecipes]
);

// getSelectedCheck :: State -> Recipe -> Bool
export const getSelectedCheck = state =>
  Maybe.caseOn(
    {
      Just: (selectedId, recipe) => recipe.id === selectedId,
      Nothing: () => false
    },
    state.selected
  );

// getRecipeField :: (Id, EditField, State) -> String
export const getRecipeField = (id, field, state) =>
  EditField.caseOn(
    {
      Name: recipe => (recipe ? recipe.name : ''),
      Ingredients: recipe => (recipe ? recipe.ingredients : ''),
      Steps: recipe => (recipe ? recipe.steps : '')
    },
    field,
    state.recipes[id]
  );

// isEditing :: EditField -> State -> Bool
export const isEditing = EditField.caseOn({
  Name: state => state.editing.name,
  Ingredients: state => state.editing.ingredients,
  Steps: state => state.editing.steps
});
