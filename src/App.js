import React from 'react';
import ShoppingList from './components/ShoppingList/ShoppingList';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://www.equalexperts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={logo} className="App-logo" alt="logo" />
                </a>

            </header>
            <ShoppingList />
        </div>
    )
}

export default App;
