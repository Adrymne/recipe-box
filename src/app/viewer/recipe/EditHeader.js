import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import './EditHeader.css';

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

export default EditHeader;
