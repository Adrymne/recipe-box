import React from 'react';
import { connect } from 'react-redux';
import { getRecipeField, isEditing } from 'store/selectors';
import * as actions from 'store/actions';

export default (field, ViewComponent, EditComponent) => {
  const EditableField = ({
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

  const mapStateToProps = (state, { recipeId }) => ({
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
    startEdit: () => startEdit(field),
    updateRecipe: value => updateRecipe(ownProps.recipeId, field, value),
    cancelEdit: () => cancelEdit(field)
  });

  return connect(mapStateToProps, actions, mergeProps)(EditableField);
};
