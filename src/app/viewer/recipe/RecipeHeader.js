import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import './RecipeHeader.css';
import { EditField } from 'types';
import { getRecipe, isEditing } from 'store/selectors';

const editHeader = ({ recipe }) => (
  <Form inline className="viewer__header-edit">
    <Input value={recipe.name} placeholder="Recipe name" />
    <Button color="link">submit</Button>
    <Button color="link">cancel</Button>
  </Form>
);

const renderHeader = ({ recipe, startEdit }) => (
  <h1>
    {recipe.name || <i>Unnamed recipe</i>}
    <small>
      <Button color="link" onClick={startEdit}>
        edit
      </Button>
    </small>
  </h1>
);

const RecipeHeader = ({ isEditing, ...props }) =>
  isEditing ? editHeader(props) : renderHeader(props);

const mapStateToProps = (state, { recipeId }) => ({
  recipe: getRecipe(recipeId, state).cata({
    Just: recipe => recipe,
    Nothing: () => ({})
  }),
  isEditing: isEditing(EditField.Name, state)
});
export default connect(mapStateToProps)(RecipeHeader);
