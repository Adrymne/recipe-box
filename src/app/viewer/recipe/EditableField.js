import React from 'react';
import { connect } from 'react-redux';
import { getRecipeField, isEditing } from 'store/selectors';
import * as actions from 'store/actions';

const EditableField = ({
  ViewComponent,
  EditComponent,
  isEditing,
  value,
  startEdit,
  updateRecipe,
  cancelEdit
}) =>
  isEditing ? (
    <EditComponent
      value={value}
      updateRecipe={updateRecipe}
      cancelEdit={cancelEdit}
    />
  ) : (
    <ViewComponent value={value} startEdit={startEdit} />
  );

const mapStateToProps = (state, { recipeId, field }) => ({
  isEditing: isEditing(field, state),
  value: getRecipeField(recipeId, field, state)
});
const mergeProps = (
  stateProps,
  { startEdit, updateRecipe, cancelEdit },
  ownProps
) => ({
  ...ownProps,
  ...stateProps,
  startEdit: () => startEdit(ownProps.field),
  updateRecipe: value => updateRecipe(ownProps.recipeId, ownProps.field, value),
  cancelEdit: () => cancelEdit(ownProps.field)
});
export default connect(mapStateToProps, actions, mergeProps)(EditableField);
