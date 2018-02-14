import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './RecipeHeader.css';
import { EditField } from 'types';
import controlInput from './controlInput';
import EditableField from './EditableField';

const ViewHeader = ({ value, startEdit }) => (
  <h1>
    {value || <i>Unnamed recipe</i>}
    <small>
      <Button color="link" onClick={startEdit}>
        edit
      </Button>
    </small>
  </h1>
);

const EditHeader = ({ value, onChange, updateRecipe, cancelEdit }) => (
  <Form
    inline
    className="viewer__header-edit"
    onSubmit={() => updateRecipe(value)}
  >
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Recipe name"
    />
    <Button color="link" type="submit">
      submit
    </Button>
    <Button color="link" onClick={cancelEdit}>
      cancel
    </Button>
  </Form>
);

export default ({ recipeId }) => (
  <EditableField
    recipeId={recipeId}
    field={EditField.Name}
    ViewComponent={ViewHeader}
    EditComponent={controlInput(EditHeader)}
  />
);
