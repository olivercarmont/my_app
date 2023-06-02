import React from 'react';
import './App.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='header'>
          <h1>Welcome to Your Dashboard</h1>
        </div>
        <div className='content'>
          <div className='sidebar'>
            <h2>Menu</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className='main'>
            <h2>Main Content</h2>
            <p>This is where your main content goes.</p>
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Dashboard />
    </div>
  );
}

export default App;
