import Maybe from 'data.maybe';
import { toPairs, map } from 'ramda';
import { EditField } from 'types';
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
  editing :: Dict EditField Bool
}
*/

// getSelectedRecipeId :: State -> Maybe Id
export const getSelectedRecipeId = state => state.selected;

// getRecipes :: State -> [{ id :: Id } & Recipe]
export const getRecipes = state =>
  map(([id, recipe]) => ({ id, ...recipe }), toPairs(state.recipes));

// getSelectedCheck :: State -> Recipe -> Bool
export const getSelectedCheck = state => recipe =>
  state.selected.cata({
    Just: selectedId => recipe.id === selectedId,
    Nothing: () => false
  });

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
