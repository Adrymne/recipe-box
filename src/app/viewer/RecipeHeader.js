import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './RecipeHeader.css';

const editHeader = () => (
  <Form inline className="viewer__header-edit">
    <Input value={recipe.name} />
    <Button color="link">submit</Button>
    <Button color="link">cancel</Button>
  </Form>
);

const renderHeader = recipe => (
  <h1>
    {recipe.name}
    <small>
      <Button color="link">edit</Button>
    </small>
  </h1>
);

const isEditing = true;
const recipe = { name: 'Japanese curry' };
const RecipeHeader = () => (isEditing ? editHeader() : renderHeader(recipe));

export default RecipeHeader;
