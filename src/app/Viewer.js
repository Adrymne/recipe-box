import React from 'react';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { getSelectedRecipeId } from 'store/selectors';
import Recipe from './viewer/Recipe';
import NoRecipe from './viewer/NoRecipe';

const Viewer = ({ recipeId }) =>
  recipeId.cata({
    Just: id => <Recipe recipeId={id} />,
    Nothing: () => <NoRecipe />
  });

const mapStateToProps = applySpec({ recipeId: getSelectedRecipeId });
export default connect(mapStateToProps)(Viewer);
