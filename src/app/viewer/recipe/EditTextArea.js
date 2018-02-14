import React from 'react';
import { Button, Input, Form } from 'reactstrap';
import { EditField } from 'types';
import './EditTextArea.css';

const title = EditField.case({
  Name: () => 'Name',
  Ingredients: () => 'Ingredients',
  Steps: () => 'Steps'
});

const EditTextArea = ({ value, field, onChange, updateRecipe, cancelEdit }) => (
  <Form className="text-edit" onSubmit={() => updateRecipe(value)}>
    <h3>
      {title(field)}
      <small>
        <Button color="link" type="submit">
          submit
        </Button>
      </small>
      <small>
        <Button color="link" onClick={cancelEdit}>
          cancel
        </Button>
      </small>
    </h3>
    <Input
      autoFocus
      type="textarea"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Form>
);

export default EditTextArea;
