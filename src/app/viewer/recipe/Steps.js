import React from 'react';
import { connect } from 'react-redux';
import TextArea from 'components/TextArea';
import EditTextArea from 'components/EditTextArea';
import { EditField } from 'types';
import { getRecipe, isEditing } from 'store/selectors';

const Steps = ({ isEditing, recipe }) =>
  isEditing ? (
    <EditTextArea title="Steps" text={recipe.steps} />
  ) : (
    <TextArea title="Steps" text={recipe.steps} />
  );

const mapStateToProps = (state, { recipeId }) => ({
  recipe: getRecipe(recipeId, state).cata({
    Just: recipe => recipe,
    Nothing: () => ({})
  }),
  isEditing: isEditing(EditField.Steps, state)
});
export default connect(mapStateToProps)(Steps);
