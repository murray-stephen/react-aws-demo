import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import './TodoList.css';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <Form className="d-flex mb-3">
                <Form.Group className="flex-grow-1 todo-input">
                    <Form.Control
                        type="text"
                        placeholder="Add a new task"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={addTodo}
                    disabled={!input.trim()}
                >
                    <i className="bi bi-plus"></i>
                </Button>
            </Form>
            <ListGroup>
                {todos.map((todo, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center todo-item">
                        {todo}
                        <Button variant="outline-danger" size="sm" onClick={() => deleteTodo(index)}>
                            <i className="bi bi-trash"></i>
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3>Test deploy pipeline 2</h3>
        </>
    );
};

export default TodoList;
