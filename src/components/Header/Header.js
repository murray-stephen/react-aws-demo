import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
const Header = () => {
    return (
        <header className="todo-header mb-4">
            <h1>
                <i className="bi bi-list-check me-2"></i>
                Simple To-Do App
            </h1>
        </header>
    );
};

export default Header;
