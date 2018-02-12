import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItem from './list/ListItem';
import './List.css';

const recipes = [
  { id: 1, name: 'Spaghetti Bolegnese' },
  { id: 2, name: 'Dim Sum' },
  { id: 3, name: 'Japanese curry' },
  { id: 4, name: 'Dish with a really long name so I can test overflow' }
];
const selectedRecipe = 2;

const List = () => (
  <ListGroup className="recipe-list__list">
    <ListGroupItem tag="button" action>
      <i>New recipe...</i>
    </ListGroupItem>
    {recipes.map(recipe => (
      <ListGroupItem key={recipe.id} active={recipe.id === selectedRecipe}>
        <ListItem recipe={recipe} />
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default List;
