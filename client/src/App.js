import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
        </header>
      </div>
    );
  }
}

export default App;