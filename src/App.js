import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/ToDoList/TodoList';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
      <Container>
        <Header />
        <Row className="justify-content-md-center mt-4">
          <Col md="12">
            <TodoList />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
