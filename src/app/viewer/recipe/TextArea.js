import React from 'react';
import { Button } from 'reactstrap';
import marked from 'marked';
import { EditField } from 'types';

const render = markdown => marked(markdown, { sanitize: true });

const title = EditField.case({
  Name: () => 'Name',
  Ingredients: () => 'Ingredients',
  Steps: () => 'Steps'
});

const TextArea = ({ value, field, startEdit }) => (
  <React.Fragment>
    <h3>
      {title(field)}
      <small>
        <Button color="link" onClick={startEdit}>
          edit
        </Button>
      </small>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: render(value) }} />
  </React.Fragment>
);

export default TextArea;
