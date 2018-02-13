import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './ListItem.css';
import { selectRecipe, deleteRecipe } from 'store/actions';

const ListItem = ({ recipe, selectRecipe, deleteRecipe }) => (
  <div className="recipe-list__list-item" onClick={selectRecipe}>
    <div>{recipe.name || <i>Unnamed recipe</i>}</div>
    <Button color="danger" onClick={deleteRecipe}>
      {'\u2717'}
    </Button>
  </div>
);

const mapDispatchToProps = { selectRecipe, deleteRecipe };
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  selectRecipe: () => dispatchProps.selectRecipe(ownProps.recipe.id),
  deleteRecipe: () => dispatchProps.deleteRecipe(ownProps.recipe.id)
});
export default connect(null, mapDispatchToProps, mergeProps)(ListItem);
