import React from 'react';
import { Row, Col } from 'reactstrap';
import './Viewer.css';
import Ingredients from './viewer/Ingredients';
import Steps from './viewer/Steps';

const recipe = { name: 'Japanese curry' };

const Viewer = () => (
  <div className="viewer">
    <h1>{recipe.name}</h1>
    <hr />
    <Row>
      <Col sm={7}>
        <Steps />
      </Col>
      <Col>
        <Ingredients />
      </Col>
    </Row>
  </div>
);

export default Viewer;
