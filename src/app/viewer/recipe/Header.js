import React from 'react';
import { Button } from 'reactstrap';

const Header = ({ value, startEdit }) => (
  <h1>
    {value || <i>Unnamed recipe</i>}
    <small>
      <Button color="link" onClick={startEdit}>
        edit
      </Button>
    </small>
  </h1>
);

export default Header;
