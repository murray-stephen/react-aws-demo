import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

test('allows users to add items to the list', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);

    const allButtons = screen.getAllByRole('button');
    const addButton = allButtons[0];

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText(/New Todo/i);
    expect(todoItem).toBeInTheDocument();
});
 test('allows users to delete items from the list', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    let allButtons = screen.getAllByRole('button');
    const addButton = allButtons[0];

    fireEvent.change(input, { target: { value: 'Todo to be deleted' } });
    fireEvent.click(addButton);

    allButtons = screen.getAllByRole('button');
    const deleteButton = allButtons[1];
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Todo to be deleted/i)).not.toBeInTheDocument();
});

