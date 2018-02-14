import React from 'react';
import { Row, Col } from 'reactstrap';
import './Recipe.css';
import { EditField } from 'types';
import Header from './recipe/Header';
import EditHeader from './recipe/EditHeader';
import TextArea from './recipe/TextArea';
import EditTextArea from './recipe/EditTextArea';
import editableRecipeField from './recipe/editableRecipeField';

const RecipeHeader = editableRecipeField(EditField.Name, Header, EditHeader);
const Steps = editableRecipeField(EditField.Steps, TextArea, EditTextArea);
const Ingredients = editableRecipeField(
  EditField.Ingredients,
  TextArea,
  EditTextArea
);

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
