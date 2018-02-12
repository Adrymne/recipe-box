import React from 'react';
import { Button, Input } from 'reactstrap';
import './EditTextArea.css';

const EditTextArea = ({ title, text }) => (
  <div className="text-edit">
    <h3>
      {title}
      <small>
        <Button color="link">submit</Button>
      </small>
      <small>
        <Button color="link">cancel</Button>
      </small>
    </h3>
    <Input type="textarea" defaultValue={text} />
  </div>
);

export default EditTextArea;
