import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shoppingList';

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
