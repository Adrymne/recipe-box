import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecipeList from './app/RecipeList';
import Viewer from './app/Viewer';
import SourceLink from './app/SourceLink';
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
    <SourceLink />
  </Container>
);

export default App;
