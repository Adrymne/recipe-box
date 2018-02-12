import React from 'react';
import { Card } from 'reactstrap';
import Search from './recipeList/Search';
import List from './recipeList/List';
import './RecipeList.css';

const RecipeList = () => (
  <Card className="recipe-list">
    <div>
      <Search />
    </div>
    <div>
      <List />
    </div>
  </Card>
);

export default RecipeList;
