import React from 'react';
import Search from './recipeList/Search';
import List from './recipeList/List';
import './RecipeList.css';

const RecipeList = () => (
  <div className="recipe-list">
    <div>
      <Search />
    </div>
    <div>
      <List />
    </div>
  </div>
);

export default RecipeList;
