import React from 'react';
import { connect } from 'react-redux';
import TextArea from 'components/TextArea';
import EditTextArea from 'components/EditTextArea';
import { EditField } from 'types';
import { getRecipe, isEditing } from 'store/selectors';

const Ingredients = ({ isEditing, recipe }) =>
  isEditing ? (
    <EditTextArea title="Ingredients" text={recipe.ingredients} />
  ) : (
    <TextArea title="Ingredients" text={recipe.ingredients} />
  );

const mapStateToProps = (state, { recipeId }) => ({
  recipe: getRecipe(recipeId, state).cata({
    Just: recipe => recipe,
    Nothing: () => ({})
  }),
  isEditing: isEditing(EditField.Ingredients, state)
});
export default connect(mapStateToProps)(Ingredients);
