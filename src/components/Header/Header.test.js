import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders Simple To-Do App header', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Simple To-Do App - AWS CloudFront hosted/i);
    expect(headerElement).toBeInTheDocument();
});
