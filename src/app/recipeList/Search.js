import React from 'react';
import { Form, Input } from 'reactstrap';
import './Search.css';

const Search = () => (
  <Form className="recipe-list__search">
    <Input type="text" name="recipeSearch" />
  </Form>
);

export default Search;
