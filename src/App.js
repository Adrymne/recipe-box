import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecipeList from './app/RecipeList';
import Viewer from './app/Viewer';
import './App.css';

const App = () => (
  <Container fluid id="app-container">
    <Row>
      <Col sm={3}>
        <RecipeList />
      </Col>
      <Col>
        <Viewer />
      </Col>
    </Row>
  </Container>
);

export default App;
