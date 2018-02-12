import React from 'react';
import { Button } from 'reactstrap';
import marked from 'marked';

const render = markdown => marked(markdown, { sanitize: true });

const TextArea = ({ title, text }) => (
  <React.Fragment>
    <h3>
      {title}
      <small>
        <Button color="link">edit</Button>
      </small>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: render(text) }} />
  </React.Fragment>
);

export default TextArea;
