import React from 'react';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { Form, Input } from 'reactstrap';
import { getSearchString } from 'store/selectors';
import * as actions from 'store/actions';
import './Search.css';

class Search extends React.Component {
  handleChange = ({ target: { value } }) => {
    this.props.updateSearch(value);
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form className="recipe-list__search" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="recipeSearch"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default connect(applySpec({ value: getSearchString }), actions)(Search);
