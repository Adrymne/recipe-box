import React from 'react';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { Maybe } from 'types';
import { getSelectedRecipeId } from 'store/selectors';
import Recipe from './viewer/Recipe';
import NoRecipe from './viewer/NoRecipe';

const Viewer = ({ recipeId }) =>
  Maybe.case(
    {
      Just: id => <Recipe recipeId={id} />,
      Nothing: () => <NoRecipe />
    },
    recipeId
  );

const mapStateToProps = applySpec({ recipeId: getSelectedRecipeId });
export default connect(mapStateToProps)(Viewer);
