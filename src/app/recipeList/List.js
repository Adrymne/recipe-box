import React from 'react';
import { connect } from 'react-redux';
import { applySpec } from 'ramda';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItem from './list/ListItem';
import './List.css';
import { getSelectedCheck, getRecipeList } from 'store/selectors';
import { createNewRecipe } from 'store/actions';

const List = ({ isSelected, recipes, createNewRecipe }) => (
  <ListGroup className="recipe-list__list">
    <ListGroupItem tag="button" action onClick={createNewRecipe}>
      <i>New recipe...</i>
    </ListGroupItem>
    {recipes.map(recipe => (
      <ListGroupItem key={recipe.id} active={isSelected(recipe)}>
        <ListItem recipe={recipe} />
      </ListGroupItem>
    ))}
  </ListGroup>
);

const mapStateToProps = applySpec({
  isSelected: getSelectedCheck,
  recipes: getRecipeList
});
const mapDispatchToProps = { createNewRecipe };
export default connect(mapStateToProps, mapDispatchToProps)(List);
