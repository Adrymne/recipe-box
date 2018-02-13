import React from 'react';
import { Row, Col } from 'reactstrap';
import './Recipe.css';
import RecipeHeader from './recipe/RecipeHeader';
import Ingredients from './recipe/Ingredients';
import Steps from './recipe/Steps';

const Recipe = ({ recipeId }) => (
  <div className="viewer">
    <RecipeHeader recipeId={recipeId} />
    <div>
      <hr />
    </div>
    <Row>
      <Col sm={7}>
        <Steps recipeId={recipeId} />
      </Col>
      <Col>
        <Ingredients recipeId={recipeId} />
      </Col>
    </Row>
  </div>
);

export default Recipe;
