import React from 'react';
import { Button } from 'reactstrap';
import './ListItem.css';

const ListItem = ({ recipe }) => (
  <div className="recipe-list__list-item">
    <div>{recipe.name}</div>
    <Button color="danger">{'\u2717'}</Button>
  </div>
);

export default ListItem;
