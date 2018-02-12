import React from 'react';
import { Row, Col } from 'reactstrap';
import './Viewer.css';
import RecipeHeader from './viewer/RecipeHeader';
import Ingredients from './viewer/Ingredients';
import Steps from './viewer/Steps';

const Viewer = () => (
  <div className="viewer">
    <RecipeHeader />
    <div>
      <hr />
    </div>
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
